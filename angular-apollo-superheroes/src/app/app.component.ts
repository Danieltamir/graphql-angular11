import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  openDeveloperModal(characterIndex: number) {
    // const modalRef = this.modalService.open(CharacterModalComponent);
    // modalRef.componentInstance.characterId = characterIndex;
  }
}
