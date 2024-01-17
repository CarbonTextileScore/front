import { Component, OnInit } from '@angular/core';
import { BarterService } from './barter.service';
import { MarketItemDTO } from './barter.DTO';

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.scss']
})

export class BarterComponent implements OnInit {
  marketItem: MarketItemDTO | undefined;

  constructor(private service:BarterService) {
  }

  ngOnInit(): void {
    this.service.getMarketItems().subscribe((item) => {
      // try to get an array with all items given by the database
      this.marketItem = item;
    })
  }
  
}
