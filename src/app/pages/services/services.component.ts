import { Component } from '@angular/core';
import { OldageService } from 'src/app/oldage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private old:OldageService,private Router:Router){}
  oldage=this.old.getData()

  gotohere(id:any){
    localStorage.setItem('id',id)
    this.Router.navigate(['/single'])
  }

}
