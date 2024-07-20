import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'',component:ShoppingItemsComponent,
  },
    {
      path:'shoppingCart',
      component:ShoppingCartComponent
    },
{
  path:'**', component:ShoppingItemsComponent
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
