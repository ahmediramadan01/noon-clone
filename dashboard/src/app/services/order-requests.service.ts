import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IOrders } from '../models/iorders';
import { IOrdersPrds } from '../models/iOrderPrds';

@Injectable({
	providedIn: 'root',
})
export class OrderRequestsService {
	onclickedbtn: EventEmitter<any> = new EventEmitter<any>();

	constructor(private httpClient: HttpClient) {}

	getAllOrders(): Observable<any> {
		// return this.httpClient.get<any>(`https://ecommerce.routemisr.com/api/v1/orders/`);
		return this.httpClient.get<any>(`${environment.BAseApiURL}/users`);
	}

	getOneOrderById(id: string): Observable<any> {
		return this.httpClient.get<any>(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
	}

	toggleStatus(id: string, status: string, payment: string): Observable<IOrders> {
		if (payment == 'Paid Online') {
			return this.httpClient.patch<IOrders>(`${environment.BAseApiURL}/orders/${id}`, { status: status });
		} else if (status == 'shipped' && payment == 'Cash on delivery') {
			return this.httpClient.patch<IOrders>(`${environment.BAseApiURL}/orders/${id}`, {
				status: status,
				paymentStatus: 'Completed',
			});
		} else if (status == 'Waiting for Supplier' && payment == 'Completed') {
			return this.httpClient.patch<IOrders>(`${environment.BAseApiURL}/orders/${id}`, {
				status: status,
				paymentStatus: 'Cash on delivery',
			});
		}
	}
	cancelOrder(id: string, payment: string): Observable<IOrders> {
		if (payment == 'Paid Online' || payment == 'Completed') {
			return this.httpClient.patch<IOrders>(`${environment.BAseApiURL}/orders/${id}`, {
				status: 'canceled',
				paymentStatus: 'Refunded',
			});
		} else {
			return this.httpClient.delete<IOrders>(`${environment.BAseApiURL}/orders/${id}`);
		}
	}
	orderCanceledPrds(id: string, quantity: number): Observable<IOrdersPrds> {
		return this.httpClient.patch<IOrdersPrds>(`${environment.BAseApiURL}/product/${id}`, { quantity: quantity });
	}

	onclickbtn(value: any) {
		this.onclickedbtn.emit(value);
	}
}
