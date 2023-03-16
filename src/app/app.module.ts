import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TestimonalsComponent } from './pages/testimonals/testimonals.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { WhyusComponent } from './pages/whyus/whyus.component';

import { SingleservicesComponent } from './pages/singleservices/singleservices.component';
import { EnquireComponent } from './pages/enquire/enquire.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    TestimonalsComponent,
    ContactusComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    WhyusComponent,
  
    SingleservicesComponent,
       EnquireComponent,
       RegisterComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
