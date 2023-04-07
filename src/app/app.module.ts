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
import { ServiceCardComponent } from './body/service/service-card/service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroImgComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServiceComponent,
    ServiceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
