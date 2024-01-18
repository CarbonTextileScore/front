import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainingDTO } from 'src/app/domain/training.DTO';
import { Action } from 'src/app/domain/user.dto';

@Component({
  selector: 'app-quota-dialog',
  templateUrl: './quota-dialog.component.html',
  styleUrls: ['./quota-dialog.component.scss']
})
export class QuotaDialogComponent implements OnInit{
  actions: Action[] = [];

  constructor() {}

  ngOnInit(): void {
    this.actions = [
      new Action("couper un bras",30),
      new Action("couper un bras",30),
      new Action("couper un bras",30),
      new Action("couper un bras",30),
      new Action("couper un bras",30),
    ]
  }


}
