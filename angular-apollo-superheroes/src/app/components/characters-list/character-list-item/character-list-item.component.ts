import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CharacterModel} from '../../../models/character.model';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharacterListItemComponent implements OnInit {

  @Input() character: CharacterModel;
  @Output() deleteCharacter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(characterId: string) {
    this.deleteCharacter.emit(characterId);
  }
}
