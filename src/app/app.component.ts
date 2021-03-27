import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginFrom= new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl(''),
  })
   get email()
   {
      return this.loginFrom.get('email')
   }

  collectData()
  {
    console.warn(this.loginFrom.value)
  }
  title = 'forms';
}
