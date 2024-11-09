import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  userName = ['Sangeetha','Murugasamy'];
  message :string = '';
  slogan : string = 'Welcome';
  name: string = '';
  twoWayBinding: string = 'Hello';

  msgFromChild(data:any){
    this.message = data;
  }

  getslogan(){
    return 'Welcome';
  }

  updateUserName(event: any) {
    this.name = event.target.value;
  }
}
