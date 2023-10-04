import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPaths } from "./core/enums/navigation-paths.enum";

const routes: Routes = [
  {
    path: NavigationPaths.EMPTY_PATH,
    pathMatch: 'full',
    redirectTo: NavigationPaths.HOME,
  },
  {
    path: NavigationPaths.HOME,
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule),
  },
  {
    path: NavigationPaths.WILDCARD,
    pathMatch: 'full',
    redirectTo: NavigationPaths.HOME,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
