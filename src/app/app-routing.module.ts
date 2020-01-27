import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { HomeComponent } from './modules/home/home/home.component';

const appRoutes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: '', component: HomeComponent }
  // TODO: add default path and pageNotFoundComponent
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
