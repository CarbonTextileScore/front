import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public router: Router
  ){ }

  switchMenuItem(url: string){
    this.router.navigate(['./home/' + url]);
  }

}
