import { Component, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})


  
  



export class UserComponentComponent {
 
  constructor(private fb: FormBuilder) {}
 
  userForm = this.fb.group({
    username: ['']
});



onSubmit() {
    console.log(this.userForm.value);
}

}
