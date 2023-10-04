import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from '../../../core/enums/navigation-paths.enum';
import { GameBoardComponent } from './game-board.component';

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: GameBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameBoardRoutingModule { }
