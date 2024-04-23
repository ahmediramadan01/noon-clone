import { Component, OnInit } from '@angular/core';
import { OrderRequestsService } from '../../services/order-requests.service';
import { Router } from '@angular/router';
import { IOrders } from '../../models/iorders';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrl: './orders.component.scss',
})
export class OrdersComponent {
	allOrders: any[] = [];

	constructor(private orderService: OrderRequestsService, private router: Router) {}

	ngOnInit(): void {
		this.orderService.getAllOrders().subscribe({
			next: (data) => {
				console.log(data);
				this.allOrders = data[0].orders;

				// this.allOrders = data.allOrders.reverse();
			},
			error(err) {
				console.log(err);
			},
		});
	}
}
