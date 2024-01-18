import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BarterService } from './barter.service';
import { MarketItemDTO } from './barter.DTO';

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.scss']
})

export class BarterComponent implements OnInit {
  searchTerm: string = '';


  // Fausses données pour tester sans API
  marketItems: MarketItemDTO[] = [
    new MarketItemDTO("Jean délavé", 32, "Jouy-en-Josas", "Jean presque neuf.\nOffre à saisir.", "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais", "#"),
    new MarketItemDTO("Pull over en laine", 25, "Bar-le-Duc", "Je vend un pull over en laine, état neuf. Livraison possible (+4.99€).\nContact par mail uniquement", "https://www.leparisien.fr/resizer/T2CswOmKUOJlLiuF822PPpnuNWE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/W74PJQK3XBDLZJ7DJ5S6UIFUDY.jpg", "#"),
    new MarketItemDTO("Pull over en laine", 26, "Bar-le-Duc", "Je vend un pull over en laine, état neuf. Livraison possible (+4.99€).\nContact par mail uniquement", "https://www.leparisien.fr/resizer/T2CswOmKUOJlLiuF822PPpnuNWE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/W74PJQK3XBDLZJ7DJ5S6UIFUDY.jpg", "#"),
    new MarketItemDTO("Jean", 30, "Jouy-en-Josas", "Jean presque neuf.\nOffre à saisir.", "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais", "#"),
    new MarketItemDTO("Pull over en laine", 27, "Bar-le-Duc", "Je vend un pull over en laine, état neuf. Livraison possible (+4.99€).\nContact par mail uniquement", "https://www.leparisien.fr/resizer/T2CswOmKUOJlLiuF822PPpnuNWE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/W74PJQK3XBDLZJ7DJ5S6UIFUDY.jpg", "#"),
    new MarketItemDTO("Pull over en laine", 28, "Bar-le-Duc", "Je vend un pull over en laine, état neuf. Livraison possible (+4.99€).\nContact par mail uniquement", "https://www.leparisien.fr/resizer/T2CswOmKUOJlLiuF822PPpnuNWE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/W74PJQK3XBDLZJ7DJ5S6UIFUDY.jpg", "#"),
    new MarketItemDTO("Jean délavé", 33, "Jouy-en-Josas", "Jean presque neuf.\nOffre à saisir.", "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais", "#"),
    new MarketItemDTO("Pull over en laine", 29, "Bar-le-Duc", "Je vend un pull over en laine, état neuf. Livraison possible (+4.99€).\nContact par mail uniquement", "https://www.leparisien.fr/resizer/T2CswOmKUOJlLiuF822PPpnuNWE=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/W74PJQK3XBDLZJ7DJ5S6UIFUDY.jpg", "#"),
    new MarketItemDTO("Jean délavé", 31, "Jouy-en-Josas", "Jean presque neuf.\nOffre à saisir.", "https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais", "#"),
  ]

  constructor(private service:BarterService) {
  }

  ngOnInit(): void {
    this.service.getMarketItems().subscribe((items) => {
      // try to get an array with all items given by the database
      this.marketItems = items;
    })
  }
  
  search() {
    this.service.getMarketItemsWithKeyword(this.searchTerm).subscribe((items) => {
      this.marketItems = items;
    })
  }
}
