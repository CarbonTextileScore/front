import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trainingDTO } from '../training.DTO';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent implements OnInit{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: trainingDTO
  ) {}

  ngOnInit(): void {
    console.log(2, this.data);
  }


}
