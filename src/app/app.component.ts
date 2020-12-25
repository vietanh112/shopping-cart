import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products :Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 3.99,
      quantity: 2,
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    },
    {
      id: '3',
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    }
    ,
    {
      id: '4',
      name: 'PRODUCT ITEM NUMBER 4',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    }
    ,
    {
      id: '5',
      name: 'PRODUCT ITEM NUMBER 5',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 1,
    }
  ]
  title = 'conchodep' ;
  numberItems: number;
  subTotal: number = 0;
  Total: number = 0;
  Discount: number = 0;

  ngOnInit() {
    this.tinhtong();
  }
  removeProduct(productID: string){
//Xoa san pham
    const index = this.products.findIndex(product => product.id === productID);
    if(index !== -1){
      this.products.splice(index, 1);
    }
    this.tinhtong();
  }
  //Tinh tong so luong san pham va tong tien
  tinhtong() {
    let numberItems = 0;
    let subTotal = 0;
    for(let product of this.products){
      numberItems += product.quantity;
      subTotal += product.price * product.quantity;
    }
    this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.Total = subTotal - (subTotal * this.Discount)/100
  }
  updateQuantity(data:any){
    (this.products.find(item => item.id === data.id) as any).quantity = parseInt(data.quantity);
    this.tinhtong()
  }
  checkCodeDiscount(code: string){
    let codeDiscount = "conchobeo";
    if(code === codeDiscount){
      this.Discount = 10;
    }
    else this.Discount = 0;
    this.tinhtong()
  }
  writeDiscount(sale: any){
    this.checkCodeDiscount(sale)
  }
}
