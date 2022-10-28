import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [            //This is where you put your url for different pages
{path: "", redirectTo: "/home", pathMatch: "full"},   //The three keys you need to make your route
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "support", component: SupportComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
