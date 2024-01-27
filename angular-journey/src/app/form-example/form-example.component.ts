import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.less'
})
export class FormExampleComponent {

  form = new FormGroup({
    name:new FormControl(''),
    age:new FormControl('')
  });

  send(){
    alert(`Hi there my name is ${this.form.value.name} and im ${this.form.value.age} yrs old`);
  }
}
