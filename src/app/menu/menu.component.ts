import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public router: Router,
    public authService: AuthService
  ){ }

  switchMenuItem(url: string){
    this.router.navigate(['./home/' + url]);
  }

}
