import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
{path: '', component: LandingComponent, pathMatch:'full'},
{path: 'auth', component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
