import { Component } from '@angular/core';
import { EnrollService } from '../../services/enroll.service';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss'
})
export class JavascriptComponent {
  title = 'Javascript';
  constructor(private service:EnrollService){}

  onEnroll(){
    this.service.enrollCourse(this.title);
  }
}
