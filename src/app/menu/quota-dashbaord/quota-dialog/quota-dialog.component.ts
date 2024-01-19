import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/domain/user.dto';
import { QuotaDashboardService } from '../quota-dashboard.service';

@Component({
  selector: 'app-quota-dialog',
  templateUrl: './quota-dialog.component.html',
  styleUrls: ['./quota-dialog.component.scss']
})
export class QuotaDialogComponent implements OnInit{

  actions: Action[] = [];

  constructor(
    private quotaService: QuotaDashboardService
  ) {}

  ngOnInit(): void {
    this.quotaService.getPunishments().subscribe((actions)=>{
      this.actions = actions
    })
  }

  apply(id: number){
    console.log(id);
    // this.quotaService.applyPunishment(id);
  }

}
