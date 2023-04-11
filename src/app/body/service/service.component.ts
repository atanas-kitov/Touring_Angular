import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IServices } from 'src/app/app.interfaces';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  @Input() services: IServices[] = [];
}
