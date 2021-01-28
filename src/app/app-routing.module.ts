import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './core/authentication/login-form/login-form.component';
import { HomeComponent } from './modules/home/home/home.component';
import { DogsComponent } from './modules/dogs/components/dogs-list/dogs-list.component';

const appRoutes: Routes = [
  { path: 'login-form', component: LoginFormComponent },
  { path: 'dogs', component: DogsComponent},
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
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
