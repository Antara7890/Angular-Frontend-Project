import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faYahoo } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  signinform!: FormGroup;
  password:any;

  faGoogle=faGoogle;
  faMicrosoft=faMicrosoft;
  faYahoo=faYahoo;
  Submit(registration:any)
  {

    console.log("Form Submitted Succesfully");
  }
  
  
}

