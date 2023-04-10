import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeroImgComponent } from './body/hero-img/hero-img.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ServiceComponent } from './body/service/service.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroImgComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServiceComponent,
    ServicesPageComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
