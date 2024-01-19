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
    this.service.getData().subscribe((data: UserDto)=>{
        this.user = data;
    })
  }

  ngAfterViewInit(): void {
    const cp = new CircleProgress();
  }

}
