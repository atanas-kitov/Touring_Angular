import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IServices } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
}
