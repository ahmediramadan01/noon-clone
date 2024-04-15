import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Products } from '../../../models/products';
import { ProductRequestsService } from '../../../services/product-requests.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
Router;
Location;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  isSmallScreen: boolean = false;
  flagNav: boolean = true;
  AllProducts: Products[] = [];
  isNextButtonDisabled: boolean = false;
  currentPage = 1;
  pageSize = 8;
  ooob: object;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    public productService: ProductRequestsService,
    public tost: NgToastService,
    private _Location: Location
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 939px)')
      .subscribe((result) => {
        this.isSmallScreen = !result.matches;
      });
    //================< get all products >====================================================
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.AllProducts = response;
        // this.AllProducts = this.AllProducts.slice(0, 9);
        // console.log(this.AllProducts[1].title);
        // this._ActivatedRoute.params.subscribe((updatedObj) => {
        //   // for (var i = 0; i < this.AllProducts.length; i++) {
        //   //   if (this.AllProducts[i].id == updatedObj.id) {
        //   //     this.AllProducts[i] = updatedObj as Products;
        //   //     console.log(this.AllProducts);
        //   //     return this.AllProducts;
        //   //   }
        //   // }
        // });
        // this._ActivatedRoute.params.subscribe((newprod) => {
        //   console.log(newprod);
        //   this.AllProducts.push(newprod as Products);
        //   console.log(this.AllProducts);
        // });
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.AllProducts);
  }

  //================< toggel nav >=========================================================
  toggleNav() {
    this.flagNav = !this.flagNav;
  }
  //================< remove product >=====================================================
  removeProduct(productId: string | undefined) {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmDelete) {
      this.productService.deletProduct(productId).subscribe(() => {
        this.AllProducts = this.AllProducts.filter(
          (product) => product.id !== productId
        );
        this.ngOnInit();
        console.log(this.AllProducts);
        this.tost.success({
          detail: 'success Message',
          summary: 'product deleted successfuly',
          duration: 5000,
        });
      });
    }
  }
  //==================< search by name of product >=========================================
  nameSearch(filtervalue: string): Products[] {
    filtervalue = filtervalue.toLocaleLowerCase();

    var filteredProduct = this.AllProducts.filter((product: Products) => {
      return product.title.toLocaleLowerCase().includes(filtervalue);
    });
    // console.log(filteredProduct);
    return (this.AllProducts = filteredProduct);
  }
  //==================< get all products for search >======================================
  // getAllProducts(page: any) {
  //   this.productService.getProducts(page, this.pageSize).subscribe({
  //     next: (response) => {
  //       this.AllProducts = response;
  //       // this.AllProducts = (response as any).data
  //       console.log(this.AllProducts);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  //===================< next & previes >==================================================
  nextPage() {
    if (this.currentPage < 33) {
      this.currentPage++;
      this.productService.getProducts(this.currentPage).subscribe({
        next: (response) => {
          this.AllProducts = response;
        },
      });
    } else {
      this.isNextButtonDisabled = true;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.productService.getProducts(this.currentPage).subscribe({
        next: (response) => {
          this.AllProducts = response;
        },
      });
    } else {
      this.isNextButtonDisabled = true;
    }
  }
}
