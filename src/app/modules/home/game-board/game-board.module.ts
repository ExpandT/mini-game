import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardRoutingModule } from './game-board-routing.module';
import { GameBoardComponent } from './game-board.component';
import { GameOverDialogComponent } from './game-over-dialog/game-over-dialog.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    GameBoardComponent,
    GameOverDialogComponent
  ],
  imports: [
    CommonModule,
    GameBoardRoutingModule,
    FormsModule,
  ]
})
export class GameBoardModule { }
