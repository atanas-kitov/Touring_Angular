import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/app.interfaces';
import { FetchServicesService } from 'src/app/fetch-services.service';
import { NavigateService } from 'src/app/navigate.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public services: IServices[] = [];
  //   public card: {} = {};

  constructor(
    private fetchServices: FetchServicesService,
    private navigate: NavigateService,
    private matDialog: MatDialog
  ) {}

  selectedCard(card: {}): void {
    this.matDialog.open(ModalComponent, {
      data: card,
    });
  }

  ngOnInit(): void {
    this.services = this.fetchServices.get();
  }

  nav(route: string): void {
    this.navigate.navigateTo(route);
  }
}
