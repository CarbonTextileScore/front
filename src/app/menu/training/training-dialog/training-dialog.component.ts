import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainingDTO } from 'src/app/domain/training.DTO';

@Component({
  selector: 'app-training-dialog',
  templateUrl: './training-dialog.component.html',
  styleUrls: ['./training-dialog.component.scss']
})
export class TrainingDialogComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TrainingDTO
  ) {}

}
