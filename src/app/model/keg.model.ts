export class Keg{
  public volume: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number){}

  sellPint(){
    if(this.volume > 0){
      this.volume--;
      return this.volume;
    }
  }
}
