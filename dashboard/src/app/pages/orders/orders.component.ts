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
<<<<<<< HEAD
  allOrders: IOrders[] = [];
=======
  allOrders: any[] = [];
>>>>>>> origin/dashboard2

  constructor(
    private orderService: OrderRequestsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
<<<<<<< HEAD
        console.log(data.allOrders);

        this.allOrders = data.allOrders.reverse();
=======
        console.log(data.data);
        this.allOrders = data.data;

        // this.allOrders = data.allOrders.reverse();
>>>>>>> origin/dashboard2
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
