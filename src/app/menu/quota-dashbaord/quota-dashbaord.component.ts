import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuotaDashboardService } from './quota-dashboard.service';
import CircleProgress from 'js-circle-progress';
import { Invoice, UserDto , City} from 'src/app/domain/user.dto';
import { MatDialog } from '@angular/material/dialog';
import { QuotaDialogComponent } from './quota-dialog/quota-dialog.component';

@Component({
  selector: 'app-quota-dashbaord',
  templateUrl: './quota-dashbaord.component.html',
  styleUrls: ['./quota-dashbaord.component.scss'],
})


export class QuotaDashbaordComponent implements OnInit, AfterViewInit {

  user: UserDto = new UserDto;

  constructor(private service: QuotaDashboardService,
    private dialog: MatDialog) {
  }

  openDialog(){
    this.dialog.open(QuotaDialogComponent);
  }

  round(numb: number) {
    return Math.round(numb);
  }

  getChildrenTileText() {
    var count = 0;
    for(var fam of this.user.familyMembers!) {
      if(fam.age! <18) {
        count++;
      }
    }
    if(count == 0) {
      return "aucun enfant";
    } else if(count == 1) {
      return "1 enfant";
    } else {
      return count+" enfants";
    }
  }

  isFamilyNumberQuotaReached() {
    for(var fam of this.user.familyMembers!) {
      if(fam.personalQuota! >=90) {
        return true;
      }
    }
    return false;
  }

  familyStatus(pers: UserDto) {
    if(pers.age! > 18) {
      return "enfant";
    } else if(pers.age! > 64) {
      return "grand-parent";
    } else {
      return "parent";
    }
  }


  personalQuotaStatus(pers: UserDto) {
    if(pers.personalQuota! > 65) {
      return "quota--high"
    } else if(pers.personalQuota! > 35) {
      return "quota--medium";
    } else {
      return "quota--low";
    }
  }


  familyQuotaStatus(pers: UserDto) {
    if(pers.familyQuota! > 65) {
      return "quota--high"
    } else if(pers.familyQuota! > 35) {
      return "quota--medium";
    } else {
      return "quota--low";
    }
  }

  cityQuotaStatus(pers: UserDto) {
    if(pers.city?.quota! > 65) {
      return "quota--high"
    } else if(pers.city?.quota! > 35) {
      return "quota--medium";
    } else {
      return "quota--low";
    }
  }

  quotaColor(invoice:Invoice) {
    if(invoice.quota! < 0) {
      return "transac__credit  transac--positif";
    } else {
      return "transac__credit transac--negatif";
    }
  }

  quotaFormatted(invoice:Invoice) {
    if(invoice.quota! < 0) {
      return invoice.quota;
    } else {
      return "+"+invoice.quota;
    }
  }
  
  ngOnInit(): void {
    this.user = getUser();
    /*this.service.getData().subscribe((data: UserDto)=>{
        console.log(data)
        console.log(data.age)
        console.log( getUser());
        this.user = data;
        
        console.log(this.user);
    })*/
  }

  ngAfterViewInit(): void {
    const cp = new CircleProgress();
  }

}


function getUser() {
  var user = new UserDto;

  var fam = new UserDto()
    fam.name = "Alice";
    fam.birthdate = "66/66/6666";
    fam.personalQuota = 3;
    fam.age = 11;
    fam.gender = "Femme";

    user.name = "Jhon";
    user.lastname = "Doe";
    user.gender = "Homme";
    user.age = 40;
    user.birthdate = "01/01/2001";
    user.familyQuota = 2;
    user.personalQuota = 100;
    user.familyMembers = [
      fam,fam,fam,fam,fam,fam,fam
    ];
    user.invoices = [
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,100),
      new Invoice("achat t shirt","01/01/2023",20,-100),
      new Invoice("achat t shirt","01/01/2023",20,100),
    ];
    user.city = new City(4, ["je suis une sanction appliquée",
        "je suis une sanction appliquée",
        "je suis une sanction appliquée",
        "je suis une sanction appliquée"
      ],["je suis une sanction à venir"])

      return user;
}