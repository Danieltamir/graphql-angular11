import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {first, map, take, takeWhile} from "rxjs/operators";
import {CharacterQueriesService} from "../../services/character-queries.service";
import {CharacterModel} from "../../models/character.model";
import {CharacterMutationsService} from "../../services/character-mutations.service";
import {CharacterModalComponent} from "../character-modal/character-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharactersListComponent implements OnInit, OnDestroy {

  public characters: CharacterModel[] = [];
  private isDestroyed = false;

  constructor(private characterQueriesService: CharacterQueriesService,
              private characterMutationsService: CharacterMutationsService,
              private modalService: NgbModal,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getCharacters();
    this.handleAddedCharacters();
  }

  deleteCharacter(characterId: string) {
    this.characterMutationsService.deleteCharacter(characterId).pipe(take(1)).subscribe(() => {
      this.characters = this.characters.filter(character => character.id !== characterId);
      this.cdr.detectChanges();
    });
  }

  openAddNewCharacterModal() {
    const modalRef = this.modalService.open(CharacterModalComponent);
    modalRef.componentInstance.characters = this.characters;
  }

  private getCharacters() {
    this.characterQueriesService.getAllCharacters()
      .pipe(take(1), map(result => result.data.characters))
      .subscribe((characters: CharacterModel[]) => {
        this.characters = [...characters];
        this.cdr.detectChanges();
      });
  }

  private handleAddedCharacters() {
    this.characterMutationsService.updateCharacter$.pipe(takeWhile(() => !this.isDestroyed)).subscribe((addedCharacter: CharacterModel) => {
      this.characters = [addedCharacter, ...this.characters];
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
  }
}
