import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IServices } from '../app.interfaces';
import { FetchServicesService } from '../fetch-services.service';
import { ScrollOnClickService } from '../header/navigation/scroll-on-click.service';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  private pageId: any | null;
  private services: IServices[] = [];
  public service: IServices | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fetchServices: FetchServicesService,
    private navigate: NavigateService,
    private scrollOnClick: ScrollOnClickService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.pageId = params.get('serviceId');
    });
  }
  ngOnInit(): void {
    this.services = this.fetchServices.get();
    this.service = this.services.find((service) => service.id == this.pageId);
    console.log(this.services);
    console.log(this.pageId);
    console.log(this.service);
  }

  nav(route: string): void {
    this.navigate.navigateTo(route);
  }
}
