import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../core/enums/navigation-paths.enum";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    loadChildren: () => import('./game-list/game-list.module').then(m => m.GameListModule),
  },
  {
    path: NavigationPaths.REACTION_SQUARE,
    loadChildren: () => import('./game-board/game-board.module').then(m => m.GameBoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
