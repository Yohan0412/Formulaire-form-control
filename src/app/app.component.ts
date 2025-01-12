import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormControl';
  username = new FormControl('');

 
}
