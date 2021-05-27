import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountUserComponent } from './pages/account-user/account-user.component';
import { CartProductsComponent } from './pages/cart/cart-products/cart-products.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product/product-details/product-details.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'auth', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'account-user', component:AccountUserComponent},
  {path:'products/list',component:ProductListComponent},
  {path:'details/:id' , component:ProductDetailsComponent},
  {path:'product/cart', component:CartProductsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
