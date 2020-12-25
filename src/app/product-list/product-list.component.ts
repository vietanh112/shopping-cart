import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeProduct(productID: string):void{
    this.onRemoveProduct.emit(productID);
  }
  updateQuantity(element: any, productid:any):void{
    let data = {
      id: productid,
      quantity: element.value
    }
    this.onUpdateQuantity.emit(data);
  }

}
