import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedPage: string = "";

  constructor(
    public router: Router,
    public authService: AuthService
  ){ }

  ngOnInit(): void {
    this.updateSelection();
  }

  updateSelection(){
    let url = this.router.url.split('/');
    this.selectedPage = url[url.length - 1]
  }

  switchMenuItem(url: string){
    this.router.navigate(['./home/' + url]);
    setTimeout(() => {
      this.updateSelection();
    }, 50);
  }

}
