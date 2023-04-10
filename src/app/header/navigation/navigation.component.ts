import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  scrollToAbout(): void {
    document.querySelector("#about-wrapper")?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContacts(): void {
    document.querySelector("#contact-us")?.scrollIntoView({ behavior: 'smooth' });
  }
}
