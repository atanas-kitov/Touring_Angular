import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollOnClickService {
  
  constructor() {
  }

  scrollToAbout(): void {
    document.querySelector("#about-wrapper")?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContacts(): void {
    document.querySelector("#contact-us")?.scrollIntoView({ behavior: 'smooth' });
  }
  
}



