import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  @Input() title: any;
  @Input() numberItems: number;
  constructor() { }

  ngOnInit() {
    console.log(this.title)
    //let square = this.countItems + this.countItems
  }

}
