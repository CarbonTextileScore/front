import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

     /** The email of the user */
     public email = new FormControl("", [Validators.required, Validators.email]);
     /** The password */
     public password = new FormControl("", Validators.required);
     /** The authentication form */
     public authenticationForm = this.formBuilder.group({
       email: this.email,
       password: this.password,
     })
     /** Whether the password should be hidden or not */
     public hide: Boolean = true;
   
  
    constructor(
      private mainService: MainService,
      public router: Router,
      private formBuilder: FormBuilder,
    ){}
  
    signIn(){
      if(this.authenticationForm.get("email")?.valid && this.authenticationForm.get("password")?.valid){
        //this.mainService.login(this.authenticationForm.get("email")?.value, this.authenticationForm.get("password")?.value);
      }
    }

}
