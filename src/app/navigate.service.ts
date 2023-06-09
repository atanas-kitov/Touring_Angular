import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(private routerService: Router) {}

  navigateTo(route: string): void {
    this.routerService.navigate([route]);
  }
}
