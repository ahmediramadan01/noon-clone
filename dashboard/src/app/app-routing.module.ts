import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { adminAuthGuard } from './guards/admin-auth.guard';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
// import { adminLoginGuard } from './guards/admin-login.guard';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { RegComponent } from './pages/reg/reg.component';
import { NewUserComponent } from './pages/new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: GroupOfRoutesComponent,
    // canActivate: [adminAuthGuard],
    children: [
      { path: '', component: DashboardComponent, title: 'Admin Dashboard' },
      { path: 'orders', component: OrdersComponent, title: 'Orders Page' },
      {
        path: 'orders/:id',
        component: OrderDetailsComponent,
        title: 'Orders details Page',
      },

      { path: 'register', component: RegisterComponent, title: 'Register' },
      { path: 'reg', component: RegComponent, title: 'Reg' },
      { path: 'reg/:id', component: RegComponent, title: 'Reg' },
      { path: 'register/newuser', component: NewUserComponent, title: 'Reg' },
      // { path: 'product', component: ProductsComponent, title: 'Product Page' },
      { path: 'profile', component: ProfileComponent, title: 'Admin Profile' },
      {
        path: 'subcategory',
        loadChildren: () =>
          import('./components/subcategory/subcategory.module').then(
            (m) => m.SubcategoryModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./components/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./components/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [adminLoginGuard],
    title: 'Login',
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    title: 'Password Reset',
  },
  { path: '**', component: NotFoundComponent, title: '404 Page Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}