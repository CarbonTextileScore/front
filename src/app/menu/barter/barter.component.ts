import { Component, OnInit } from '@angular/core';
import { BarterService } from './barter.service';

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.scss']
})

export class BarterComponent implements OnInit {

  constructor(private service:BarterService) {

  }

  ngOnInit(): void {
  }
  
}
