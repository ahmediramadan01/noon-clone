import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Products } from '../../../models/products';
import { Category } from '../../../models/category';
import { Subcategory } from '../../../models/subcategory';
import { CategoryService } from '../../../services/category.service';
import { SubcategoryService } from '../../../services/subcategory.service';
import { ProductRequestsService } from '../../../services/product-requests.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
	selector: 'app-newproduct',
	templateUrl: './newproduct.component.html',
	styleUrl: './newproduct.component.scss',
})
export class NewproductComponent implements OnInit {
	thumbnailUrl: string = '';
	imageUrls: string[] = [];
	product: Products = {} as Products;
	AllCategories: Category[] = [];
	AllSubCategories: Subcategory[] = [];
	isSmallScreen: boolean = false;
	flagNav: boolean = true;
	constructor(
		public productsService: ProductRequestsService,
		public router: Router,
		public categoryService: CategoryService,
		public subCategoryService: SubcategoryService,
		private breakpointObserver: BreakpointObserver,
		public tost: NgToastService
	) {
		// this.categoryService.getAllCategories().subscribe({
		//   next: (data) => {
		//     this.AllCategories = (data as any).data || [];
		//   },
		//   error: (err) => {
		//     console.log(err);
		//   },
		// });
		// this.subCategoryService.getAllSubCategories().subscribe({
		//   next: (data) => {
		//     this.AllSubCategories = (data as any).data || [];
		//   },
		//   error: (err) => {
		//     console.log(err);
		//   },
		// });
	}
	ngOnInit(): void {
		this.breakpointObserver.observe('(min-width: 939px)').subscribe((result) => {
			this.isSmallScreen = !result.matches;
		});
	}
	//============================< image upload >================================================

	// file: File[] = [];
	// files: File[] = [];

	// onSelectThumbnail(event) {

	//   this.file.push(...event.addedFiles);

	// }
	// onSelectImage(event) {
	//   this.files.push(...event.addedFiles);
	//   const selectedFile = event.addedFiles[0];
	//   console.log(this.files.slice(0 - 4));
	// }
	// onRemove(event) {

	//   this.file.splice(this.file.indexOf(event), 1);
	// }
	// onRemoveImges(event) {
	//   this.files.splice(this.file.indexOf(event), 1);
	// }
	//==========< toggle nav >====================================================
	toggleNav() {
		this.flagNav = !this.flagNav;
	}
	//==========< Add New Product >===============================================
	// AddNewProduct() {
	//   console.log('hii');

	// if (!this.file[0] || this.files.length < 4) {
	//   this.tost.info({
	//     detail: 'info Message',
	//     summary: 'upload one cover image and four images first',
	//     duration: 5000,
	//   });
	//   return;
	// }
	// const thumbnailFormData = new FormData();
	// thumbnailFormData.append('file', this.file[0]);
	// thumbnailFormData.append('upload_preset', 'angular-cloudinary');
	// thumbnailFormData.append('cloud_name', 'doksixv16');
	// this.productsService
	//   .uploadImage(thumbnailFormData)
	//   .subscribe((thumbnailRes) => {
	//     if (thumbnailRes) {
	//       console.log('cover image', thumbnailRes);
	//       this.thumbnailUrl = thumbnailRes.secure_url;
	//       this.product.thumbnail = this.thumbnailUrl;
	//       this.uploadImagesSequentially(0);
	//     }
	//   });
	// }

	AddNewProduct() {
		// if (index < this.files.length) {
		//   const imageFormData = new FormData();
		//   imageFormData.append('file', this.files[index]);
		//   imageFormData.append('upload_preset', 'angular-cloudinary');
		//   imageFormData.append('cloud_name', 'doksixv16');

		//   this.productsService.uploadImage(imageFormData).subscribe((imageRes) => {
		//     this.imageUrls.push(imageRes.secure_url);
		//     this.uploadImagesSequentially(index + 1);
		//     console.log('imgs', this.imageUrls);
		//     this.product.images = this.imageUrls;
		//   });
		// }
		// else {

		console.log(this.product);

		this.productsService.insertNewProduct(this.product).subscribe({
			next: (data) => {
				let newprod = data;
				console.log(data);
				this.tost.success({
					detail: 'success Message',
					summary: 'product created successfuly',
					duration: 5000,
				});

				this.router.navigate(['/dashboard/product/product']);
			},
			error: (err) => {
				console.log(err);
				this.tost.error({
					detail: 'Error Message',
					summary: 'creat faild creat again',
					duration: 5000,
				});
			},
		});
	}
}
// }
