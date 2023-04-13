import { Component, OnInit } from '@angular/core';
import { ScrollOnClickService } from './scroll-on-click.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private scrollOnClick: ScrollOnClickService) {}
  ngOnInit(): void {}

  scrollTo(element: string): void {
    this.scrollOnClick.scrollTo(element);
  }
}
