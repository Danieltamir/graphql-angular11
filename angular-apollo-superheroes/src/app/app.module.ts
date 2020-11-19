import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {CharacterModalComponent} from './components/character-modal/character-modal.component';
import {FormsModule} from "@angular/forms";
import {CharactersListComponent} from './components/characters-list/characters-list.component';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { CharacterListItemComponent } from './components/characters-list/character-list-item/character-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterModalComponent,
    CharactersListComponent,
    CharacterListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    ScrollingModule
  ],
  providers: [],
  entryComponents: [CharacterModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
