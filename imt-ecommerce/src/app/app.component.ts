import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imt-ecommerce';
  
  products: Product[] = [
    new Product("Men Sweatshirt","https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png","C0D1NG_TH3_W0RLD BIO HOODIE - MEN",39,1),
    new Product("Men T-Shirt","https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png","BIO T-SHIRT WITH CREWNECK - MEN.",19,0),
    new Product("T-Shirt women","https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png","BIO T-SHIRT WITH CREWNECK - WOMEN.",30,10),
    new Product("Tote bag","https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png","C0D1NG_TH3_W0RLD, BIO TOTE BAG.",12.5,32)

  ];

  basket: Product[] = [];

  addProductToBasket(event:Product){
    this.basket.push(event);
    console.log(this.basket);
  }

  getTotal(){
    var res = 0;
    this.basket.forEach(element => 
      res+= element.price
    );

    return res;
  }

 


  




}


