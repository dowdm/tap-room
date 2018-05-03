import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg} from '../model/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input () childKegArray: Keg[];
  @Output () clickSender = new EventEmitter();
  selectedKeg = null;

  sortByFilter: string = "a";
  searchByFilter: string = "";

  runSearch(searchString) {
    this.searchByFilter = searchString;
  }

  onChange(optionFromMenu) {
    this.sortByFilter = optionFromMenu;
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  viewDetails(currentKeg){
    if(this.selectedKeg === null) {
      this.selectedKeg = currentKeg;
    } else {
      this.selectedKeg = null;
    }
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

  buyPint(currentKeg){
    currentKeg.sellPint();
  }

  volumeCheck(currentKeg) {
    if (currentKeg.volume <= 10) {
        return "almost-empty";
    }
  }

  fontSize(currentKeg) {
    return ((currentKeg.alcoholContent -4)*2)/6 + 5;
  }
}
