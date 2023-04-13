import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/app.interfaces';
import { FetchServicesService } from 'src/app/fetch-services.service';
import { NavigateService } from 'src/app/navigate.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public services: IServices[] = [];

  constructor(
    private fetchServices: FetchServicesService,
    private navigate: NavigateService
  ) {}

  ngOnInit(): void {
    this.services = this.fetchServices.get();
  }

  nav(route: string): void {
    this.navigate.navigateTo(route);
  }
}
