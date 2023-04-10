import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: ":serviceId", component: ServicesPageComponent },
  { path: "", component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
