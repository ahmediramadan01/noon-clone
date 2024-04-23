import { Component, Input, OnInit } from '@angular/core';
import { IOrders } from '../../models/iorders';
import { OrderRequestsService } from '../../services/order-requests.service';
import { Router } from '@angular/router';
OrderRequestsService;

@Component({
	selector: 'app-order-card',
	templateUrl: './order-card.component.html',
	styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
	@Input() order: any;
	@Input() i: any;
	date: Date;
	postDate: string = '';
	constructor(private _OrderRequestsService: OrderRequestsService, private _Router: Router) {}
	ngOnInit(): void {
		// console.log(this.order);
		this.date = new Date(this.order.createdAt);

		// console.log(
		// 	this.date.toLocaleDateString('en-US', {
		// 		year: 'numeric',
		// 		month: 'long',
		// 		day: 'numeric',
		// 	})
		// );
		this.postDate = this.date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	}

	onclickedbtn(value: any, id: any) {
		this._OrderRequestsService.onclickbtn(value);
		console.log(value);
		// this._Router.navigate([`/dashboard/orders/${id}`]);
	}
}
