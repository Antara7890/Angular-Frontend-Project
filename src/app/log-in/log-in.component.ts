import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']

})
export class LogInComponent {
  faEye=faEye;
  faEyeSlash=faEyeSlash;
 
}


