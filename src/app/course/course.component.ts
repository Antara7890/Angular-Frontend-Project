

import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  faStar=faStar;
  faStarHalfStroke=faStarHalfStroke;
  faIndianRupeeSign=faIndianRupeeSign;
  faHeart=faHeart;

  
}

