import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersListComponent} from "./components/characters-list/characters-list.component";

const routes: Routes = [
  {component: CharactersListComponent, path: "characters"},
  {path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
