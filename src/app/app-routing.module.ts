import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('about/AboutModule').then((module: any) => {
        return module.AboutModule;
      }),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('contact/ContactModule').then((module: any) => {
        return module.ContactModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
