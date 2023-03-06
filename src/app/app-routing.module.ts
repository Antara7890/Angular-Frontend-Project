
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { PlacementComponent } from './placement/placement.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'Signin', component:SigninComponent},
  {path: 'home', component:HomeComponent},
  {path: 'placement', component:PlacementComponent},
  {path: 'course', component:CourseComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'log-in', component:LogInComponent},
  {path: 'search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }