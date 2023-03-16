import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EnquireComponent } from './pages/enquire/enquire.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServicesComponent } from './pages/services/services.component';
import { SingleservicesComponent } from './pages/singleservices/singleservices.component';
import { TestimonalsComponent } from './pages/testimonals/testimonals.component';
import { WhyusComponent } from './pages/whyus/whyus.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'gallery',component:GalleryComponent

  },
  {
    path:'services',component:ServicesComponent
    
  },
  {
    path:'testimonals',component:TestimonalsComponent
    
  },

  {
    path:'login',component:LoginComponent
    
  },
  {
    path:'whyus',component:WhyusComponent
    
  },
 
  {
    path:'single',component:SingleservicesComponent
    
  },
  {
    path:'enquire',component:EnquireComponent
  },
  {
    path:'register',component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
