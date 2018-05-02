import { Component } from '@angular/core';
import { Keg } from './model/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  selectedKeg = null;
  editableKeg = null;
  kegArray: Keg[]=[
    new Keg("Double IPA", "Yummy Beer", 6, 6.8),
    new Keg("Koelsch", "Fancy Beer", 7, 4.8),
    new Keg("Hefeweizen", "Deutsches Bier", 7, 5.4),
    new Keg("Imperial Stout", "Cali Brew", 9, 7.9),
    new Keg("Lager", "Generic Beer", 4, 4.6),
  ]

  viewDetails(currentKeg){
    if(this.selectedKeg === null) {
      this.selectedKeg = currentKeg;
    } else {
      this.selectedKeg = null;
    }
  }
  addKeg(nameInput, brandInput, priceInput, alcoholContentInput){
    this.kegArray.push(new Keg(nameInput, brandInput, priceInput, alcoholContentInput));
  }

  buyPint(currentKeg){
    currentKeg.sellPint();
  }
  editKeg(currentKeg){
    this.editableKeg = currentKeg;
  }
  finishEdit(){
    this.editableKeg = null;
  }
  priceColor(currentKeg) {
    if(currentKeg.price < 6){
      return "bg-info";
    } else if (currentKeg.price >= 6 && currentKeg.price < 8) {
      return "bg-warning";
    } else if (currentKeg.price >= 8) {
      return "bg-danger";
    }
  }

  volumeCheck(currentKeg) {
    if (currentKeg.volume <= 10) {
        return "almost-empty";
    }
  }

  fontSize(currentKeg) {
    console.log(((currentKeg.alcoholContent -4)*2)/6 + 5);
    return ((currentKeg.alcoholContent -4)*2)/6 + 5;
  }
}
