import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { Router} from '@angular/router';
import { ContentService } from '../services/content.service';
@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrl: './shopping-items.component.css'
})
export class ShoppingItemsComponent {
  totalProductArray: any[] = [];
  productCounterLeftTopp  = 0;
productCounterRightTopp = 0;
productCounterBottomLeftt = 0;
productCounterBottomRightt = 0;
 
  userCartArray:any = []

ngOnInit(): void {
  this.totalProductArray  =   this.content.itemDetails
}
  constructor(private route:Router, private content:ContentService){}
  
  addItem(productCoordinate: string){

    
    switch(productCoordinate) {
      case productCoordinate = 'left-top':
        // console.log(this.content.itemDetails[0]);
        
        this.userCartArray.push(this.content.itemDetails[0]);
        this.content.currentCartDetails = this.userCartArray;
        // this.content.setMessage(this.content.currentCartDetails);
        console.log('User Current Cart:',this.userCartArray);
        this.content.productCounterLeftTop++;
        this.productCounterLeftTopp = this.content.productCounterLeftTop;
        // console.log('User Current Cart:',this.userCartArray);
        break;
      case productCoordinate = 'right-top':
        this.userCartArray.push(this.content.itemDetails[1]);
        this.content.currentCartDetails = this.userCartArray;
        console.log('User Current Cart:',this.userCartArray);
        this.content. productCounterRightTop++;
        this.productCounterRightTopp = this.content.productCounterRightTop;
        break;
      case productCoordinate = 'left-bottom':
        this.userCartArray.push(this.content.itemDetails[2]);
        this.content.currentCartDetails = this.userCartArray;
        console.log('User Current Cart:',this.userCartArray);
        this.content.productCounterBottomLeft++;
        this.productCounterBottomLeftt = this.content.productCounterBottomLeft;
        break;
      case productCoordinate = 'right-bottom':
        this.userCartArray.push(this.content.itemDetails[3]);
        this.content.currentCartDetails = this.userCartArray;
        console.log('User Current Cart:',this.userCartArray);
        this.content. productCounterBottomRight++;
        this.productCounterBottomRightt = this.content.productCounterBottomRight;
        break;
      default:
        // code block
    }
     
    Swal.fire({
      title: 'Success!',
      text: 'Product Added to your cart',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  removeItem(productCoordinate: string){
    // this.content.productCounter--;
    Swal.fire({
      title: 'Success!',
      text: 'Product Removed from your cart',
      icon: 'info',
      confirmButtonText: 'OK'
    })

    switch(productCoordinate) {
      
      case productCoordinate = 'left-top':
        this.userCartArray.pop(this.content.itemDetails[0]);
        console.log(this.userCartArray);
        this.content.productCounterLeftTop--;
        this.productCounterLeftTopp = this.content.productCounterLeftTop;
        console.log('pictureCoordinate = ' + productCoordinate );
        break;
      case productCoordinate = 'right-top':
        this.userCartArray.pop(this.content.itemDetails[1]);
        console.log(this.userCartArray);
        this.content. productCounterRightTop--;
        this.productCounterRightTopp = this.content.productCounterRightTop;
        break;
      case productCoordinate = 'left-bottom':
        this.userCartArray.pop(this.content.itemDetails[2]);
        console.log(this.userCartArray);
        this.content.productCounterBottomLeft--;
        this.productCounterBottomLeftt = this.content.productCounterBottomLeft;
        break;
      case productCoordinate = 'right-bottom':
        this.userCartArray.pop(this.content.itemDetails[3]);
        console.log(this.userCartArray);
        
        this.content. productCounterBottomRight--;
        this.productCounterBottomRightt = this.content.productCounterBottomRight;
        break;
      default:
        // code block
  }

  
}
checkout(){
  let  sumprice =0 , totalPrice = 0;

      console.log('this is product price',this.userCartArray[0].productPrice);
      // console.log('this is product price',this.userCartArray[1].productPrice);
       
      // this.userCartArray[0].productPrice.replace('Rs:','').replace('/-','')

   this.userCartArray.forEach((element:any) => {
     let myprice = element.productPrice.replace('Rs:','').replace('/-','')
       sumprice += parseInt( myprice);       
          });
          console.log('sumprice is:',sumprice);
           
          this.userCartArray.push({TotalCost : sumprice})
  this.route.navigate(['shoppingCart'])
}
}