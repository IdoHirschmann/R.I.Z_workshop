import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
