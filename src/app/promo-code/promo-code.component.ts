import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  @Output() onWriteDiscount = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  writeDiscount(sale: any):void{
    this.onWriteDiscount.emit(sale.value);
  }
}
