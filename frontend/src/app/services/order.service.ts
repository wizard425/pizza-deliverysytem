import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {



  constructor(override http: HttpClient) {
    super(http);
    this.url = 'order';
  }

  getAllFromToday(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.baseUrl + this.url + '/today');
  }

}
