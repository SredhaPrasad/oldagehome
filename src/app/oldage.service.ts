import { Injectable } from '@angular/core';
import { services } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class OldageService {

  constructor() { }
  getData(){
    return services
  }
}
