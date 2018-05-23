import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/layout/navbar/navbar.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { TiersComponent } from './components/tiers/tiers.component';
import { TierAddComponent } from './components/tiers/tier-add/tier-add.component';
import { TierModifyComponent } from './components/tiers/tier-modify/tier-modify.component';
import {AppRouteModule} from './app-route.module';
import {AuthenticationService} from '../services/authentication.service';
import {TiersService} from '../services/tiers.service';
import { TiersModule } from './components/tiers/tiers.module';
import {FormsModule} from '@angular/forms';
import {WrapperComponent} from './components/shared/layout/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    TiersComponent,
    TierAddComponent,
    TierModifyComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    TiersModule,
    FormsModule
  ],
  providers: [AuthenticationService, TiersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
