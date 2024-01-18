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

  switchMenuItem(url: string, id: string){
    this.router.navigate(['./home/' + url]);

   
      var items: HTMLCollectionOf<Element> = document.getElementsByClassName("menu-item");
      for(var i = 0 ; i<items.length ; i++) {
        items.item(i)?.classList.remove("selected");
      }
      document.getElementById(id)?.classList.add("selected");
    
  }

}
