import { Component, OnInit } from '@angular/core';
import { IServices } from 'src/app/app.interfaces';
import { FetchServicesService } from 'src/app/fetch-services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public services: IServices[] = [];

  constructor(private fetchServices: FetchServicesService) {}

  ngOnInit(): void {
    this.services = this.fetchServices.get();
  }
}
