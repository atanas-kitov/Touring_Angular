import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollOnClickService {
  constructor() {}

  scrollTo(element: string): void {
    document.querySelector(element)?.scrollIntoView({ behavior: 'smooth' });
  }
}
