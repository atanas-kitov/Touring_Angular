import { Component, OnInit } from '@angular/core';
import { ScrollOnClickService } from './scroll-on-click.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private scrollOnClick:ScrollOnClickService){}
  ngOnInit(): void {
  }

  scrollToAbout(): void {
    document.querySelector("#about-wrapper")?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContacts(): void {
    document.querySelector("#contact-us")?.scrollIntoView({ behavior: 'smooth' });
  }
}
