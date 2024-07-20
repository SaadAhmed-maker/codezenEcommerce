import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartDetails:any =[]


  profileForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    mobno: ['',Validators.required],
    adress:['',Validators.required],
    age:['',Validators.required],
    dob: ['',Validators.required]
  });
  
  
  constructor(private content:ContentService, private formBuilder:FormBuilder){
    this.cartDetails = this.content.currentCartDetails;
    // this.content.currentCartDetails.subscribe(data => this.cartDetails = data)
  }
  ngOnInit(): void {
      console.log('observable data cart details:', this.cartDetails);
         
  }  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }


}
