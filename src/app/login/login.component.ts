import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public hide: Boolean = true;

  public authenticationForm = this.formBuilder.group({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  })

  constructor(
    private authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder,
  ){}

  signIn() {
    const emailControl = this.authenticationForm.get("email");
    const passwordControl = this.authenticationForm.get("password");

    if (emailControl?.valid && passwordControl?.valid) {
      const emailValue = emailControl.value;
      const passwordValue = passwordControl.value;

      if (emailValue && passwordValue) {
        this.authService.login(emailValue, passwordValue);
      }
    }
  }

}
