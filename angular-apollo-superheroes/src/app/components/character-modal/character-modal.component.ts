import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CharacterQueriesService} from '../../services/character-queries.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CharacterMutationsService} from '../../services/character-mutations.service';
import {CharacterModel} from '../../models/character.model';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterModalComponent {

  @Input() characterId: any;
  @Input() characters: CharacterModel[];
  @Input() isVillain: boolean;
  @Input() characterIndex: number;
  character: CharacterModel = {id: null, name: '', characterType: null};

  constructor(private characterQueriesService: CharacterQueriesService,
              private characterMutationService: CharacterMutationsService,
              private modalService: NgbModal) {
  }

  save() {
    this.characterMutationService.addNewCharacter(this.character).subscribe((resultStatus: any) => {
      if (resultStatus.data.addNewCharacter.successful) {
        this.modalService.dismissAll();
        this.characterMutationService.updateCharacter$.next(this.character);
      }
    });
  }
}
