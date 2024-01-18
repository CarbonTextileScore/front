import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuotaDashboardService } from './quota-dashboard.service';

import CircleProgress from 'js-circle-progress';
import { Invoice, UserDto , City} from 'src/app/domain/user.dto';

@Component({
  selector: 'app-quota-dashbaord',
  templateUrl: './quota-dashbaord.component.html',
  styleUrls: ['./quota-dashbaord.component.scss'],
})


export class QuotaDashbaordComponent implements OnInit, AfterViewInit {
  user: UserDto = new UserDto;
  

  constructor(private service: QuotaDashboardService) {
    var fam = new UserDto()
    fam.name = "Alice";
    fam.birthdate = "66/66/6666";
    fam.userQuota = 3;
    fam.age = 11;
    fam.gender = "Femme";


    this.user.name = "Jhon";
    this.user.lastname = "Doe";
    this.user.gender = "Homme";
    this.user.age = 40;
    this.user.birthdate = "01/01/2001";
    this.user.familyQuota = 2;
    this.user.userQuota = 1;
    this.user.family = [
      fam,fam,fam,fam,fam,fam,fam
    ];
    this.user.invoices = [
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,-100),
      new Invoice("achat t shirt","01/01/2023",20,100),
    ];
    this.user.city = new City(4, ["je suis une sanction appliquée",
        "je suis une sanction appliquée",
        "je suis une sanction appliquée",
        "je suis une sanction appliquée"
      ],["je suis une sanction à venir"])

  }
  ngAfterViewInit(): void {
    const cp = new CircleProgress();

    //document.getElementById("quota")?.appendChild(cp);
  }
  ngOnInit(): void {
  }
}
