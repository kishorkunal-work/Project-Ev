import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComingsoonComponent } from './pages/helper/comingsoon/comingsoon.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  ...['registerpolicy'].map(p => ({
    path: p,
    component: HomeComponent,
    canActivate: [AuthGuard]
  })),
  ...['', 'about'].map(p => ({
    path: p,
    component: AboutComponent
  })),
  // ...['', 'contact'].map(p => ({
  //   path: p,
  //   component: ContactComponent
  // })),
  ...['', 'home'].map(p => ({
    path: p,
    component: HomePageComponent
  })),
  {
    path: 'login',
    component: LoginComponent
  },
  ...['services', 'portfolio', 'blog', 'contact'].map(p => ({
    path: p,
    component: ComingsoonComponent
  })),];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
