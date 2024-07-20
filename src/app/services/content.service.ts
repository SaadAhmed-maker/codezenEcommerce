import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
      currentCartDetails = new BehaviorSubject<any>('');
      getCurrentCartDetails = this.currentCartDetails.asObservable();
      productCounterLeftTop:number = 0;
      productCounterRightTop:number = 0;
      productCounterBottomLeft:number = 0;
      productCounterBottomRight:number = 0;
    
  constructor() { }
  setMessage(data:any){
    this.currentCartDetails.next(data)
  }
  itemDetails:any = [
    {
      productCategory:'Computer Accessory',
      productSubCategory:'Computer GraphicsCard',
      productName:'GTX 1050ti',
      productCode:'7b2xZ9',
      productImageSrc:"Images/IMG-20240708-WA0007.jpg",
      productDescription:'Amazing graphics Card',
      productPrice:'Rs:16000.42/-'
    },
    {
      productCategory:'Computer Accessory',
      productSubCategory:'Computer GraphicsCard',
      productName:'GTX 1660ti',
      productCode:'7b2xZ9',
      productImageSrc:"Images/IMG-20240708-WA0007.jpg",
      productDescription:'Amazing graphics Card',
      productPrice:'Rs:12000.23/-'
    },
    {
      productCategory:'Computer Accessory',
      productSubCategory:'Computer GraphicsCard',
      productName:'GTX 4080ti',
      productCode:'7b2xZ9',
      productImageSrc:"Images/IMG-20240708-WA0007.jpg",
      productDescription:'Amazing graphics Card',
      productPrice:'Rs:10000/-'
    },
    {
      productCategory:'Computer Accessory',
      productSubCategory:'Computer GraphicsCard',
      productName:'GTX 1050ti',
      productCode:'7b2xZ9',
      productImageSrc:"Images/IMG-20240708-WA0007.jpg",
      productDescription:'Amazing graphics Card',
      productPrice:'Rs:26000/-'
    },
    {
      productCategory:'Computer Accessory',
      productSubCategory:'Computer GraphicsCard',
      productName:'GTX 1050ti',
      productCode:'7b2xZ9',
      productImageSrc:"Images/IMG-20240708-WA0007.jpg",
      productDescription:'Amazing graphics Card',
      productPrice:'Rs:46000/-'
    }

  ]

}
