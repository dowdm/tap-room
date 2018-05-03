import { Component } from '@angular/core';
import { Keg } from './model/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variable used on root html
  title = 'Tap Room';
  //sets edit-keg vi
  editableKeg = null;

  masterKegArray: Keg[]=[
    new Keg("Double IPA", "Yummy Beer", 6, 6.8),
    new Keg("Koelsch", "Fancy Beer", 7, 4.8),
    new Keg("Hefeweizen", "Deutsches Bier", 7, 5.4),
    new Keg("Imperial Stout", "Cali Brew", 9, 7.9),
    new Keg("Lager", "Generic Beer", 4, 4.6),
  ];

  editKeg(currentKeg){
    this.editableKeg = currentKeg;
  }

  finishEdit(){
    this.editableKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegArray.push(newKeg);
  }


}
