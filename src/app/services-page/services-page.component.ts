import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IServices } from '../app.interfaces';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data)
  }

  @Input() data :IServices | any;


}
