import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';
import { GameCardComponent } from './game-card/game-card.component';


@NgModule({
  declarations: [
    GameListComponent,
    GameCardComponent
  ],
  imports: [
    CommonModule,
    GameListRoutingModule
  ]
})
export class GameListModule { }
