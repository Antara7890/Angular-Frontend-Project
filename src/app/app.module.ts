import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { PlacementComponent } from './placement/placement.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
 
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    ContactComponent,
    PlacementComponent,
    LogInComponent,
    AboutComponent,
    SigninComponent,
    SearchComponent,
    
    
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
