import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OldageService } from 'src/app/oldage.service';

@Component({
  selector: 'app-singleservices',
  templateUrl: './singleservices.component.html',
  styleUrls: ['./singleservices.component.css']
})
export class SingleservicesComponent {
  single:any
  constructor(private old:OldageService,private router:Router){}
  ngOnInit():void{
    let id:any=localStorage.getItem('id')
    console.log(id);
    
    let dataset=this.old.getData()
    this.single=dataset.filter(e=>e.name==id)
    console.log(this.single)
  }

 
}
