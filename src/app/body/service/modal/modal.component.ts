import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IServices } from 'src/app/app.interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected card: IServices,
    protected matDialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
    // console.log(this.card);
  }
  ngOnDestroy(): void {
    this.matDialogRef.close(this.card);
  }
  onClose(): void {
    this.matDialogRef.close();
  }
}
