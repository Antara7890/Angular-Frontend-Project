import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faYahoo } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faGoogle=faGoogle;
  faMicrosoft=faMicrosoft;
  faYahoo=faYahoo;
  Submit(registration:any)

  
  {

    console.log("Form Submitted Succesfully");
   
  }

}
