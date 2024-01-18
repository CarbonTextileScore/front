import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuotaDashboardService } from './quota-dashboard.service';

import CircleProgress from 'js-circle-progress';

@Component({
  selector: 'app-quota-dashbaord',
  templateUrl: './quota-dashbaord.component.html',
  styleUrls: ['./quota-dashbaord.component.scss'],
})


export class QuotaDashbaordComponent implements OnInit, AfterViewInit {
  test: number = 1;

  list: number[] = [1,2,3,4];

  constructor(private service: QuotaDashboardService) {

  }
  ngAfterViewInit(): void {
    const cp = new CircleProgress();

    //document.getElementById("quota")?.appendChild(cp);
  }
  ngOnInit(): void {

  }
}
