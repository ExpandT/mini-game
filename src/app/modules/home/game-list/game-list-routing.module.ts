import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "../../../core/enums/navigation-paths.enum";
import { GameListComponent } from "./game-list.component";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    component: GameListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameListRoutingModule { }
