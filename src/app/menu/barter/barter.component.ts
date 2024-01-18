import { Component, OnInit } from '@angular/core';
import { BarterService } from './barter.service';
import { MarketItemDTO } from '../../domain/barter.DTO';

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.scss']
})
export class BarterComponent implements OnInit {

  picture: string = "/assets/resources/couture.jpg";
  searchTerm: string = '';
  marketItems: MarketItemDTO[] = []
  filteredMarketItems: MarketItemDTO[] = [];

  constructor(
    private barterService: BarterService
  ) {}

  ngOnInit(): void {
    this.barterService.getMarketItems().subscribe((items) => {
      this.marketItems = items;
      this.filteredMarketItems = items;
    });
  }

  search(): void {
    this.marketItems = this.filteredMarketItems.filter(item => {
      return (item.name.toLowerCase().includes(this.searchTerm.toLowerCase())) || 
        (item.countryName.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (item.price.toString().includes(this.searchTerm)) ||
        (item.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
    });
 
  }

}
