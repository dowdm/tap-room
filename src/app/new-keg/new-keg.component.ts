import { Component, Output, EventEmitter } from '@angular/core';
import { Keg} from '../model/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent  {
  @Output() sendKeg = new EventEmitter();

  addKeg(name: string, brand: string, price: number, alcoholContent: number){
    let newKeg: Keg = new Keg(name, brand, price, alcoholContent);
    this.sendKeg.emit(newKeg);
  }

  constructor() { }



}
