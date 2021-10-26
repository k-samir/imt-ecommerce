import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input() data: Product = new Product("","","",0,0);
  @Output() addToBasket = new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
  }

  addProductToBasket(element:Product):void{
   // console.log(element);
    this.addToBasket.emit(element);
  }
  

}
