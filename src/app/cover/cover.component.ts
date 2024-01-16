import { Component } from '@angular/core';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {

  constructor(
    private mainService: MainService
  ){}

  

}
