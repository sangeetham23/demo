import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  providers:[EnrollService],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent {

  title = 'Angular';
  constructor(private service:EnrollService){}

  onEnroll(){
    this.service.enrollCourse(this.title);
  }
}
