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
    username: new FormControl("",
      {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }
    ),
    password: new FormControl("",
      {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      }
    ),
  })

  constructor(
    private authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder,
  ){}

  signIn() {
    if (this.authenticationForm?.valid) {
      this.authService.login(this.authenticationForm.value);
    }
  }

}
