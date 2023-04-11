import { Component, OnInit } from '@angular/core';
import { IServices } from '../app.interfaces';
import { FetchServicesService } from '../fetch-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  public services : IServices[] = [];

  constructor ( private fetchServices: FetchServicesService ){}

  ngOnInit(): void {
    this.services = this.fetchServices.get();
  }
}
