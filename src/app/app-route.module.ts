import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/authentication/login/login.component';
import {TiersComponent} from './components/tiers/tiers.component';
import {TierAddComponent} from './components/tiers/tier-add/tier-add.component';
import {TierModifyComponent} from './components/tiers/tier-modify/tier-modify.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'tiers', component: TiersComponent, children: [
    { path: 'add', component: TierAddComponent, pathMatch: 'full'},
    { path: 'modify/:id', component: TierModifyComponent, pathMatch: 'full'},
  ] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouteModule {

}
