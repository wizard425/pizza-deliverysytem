import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService extends BaseService<Pizza> {



  constructor(override http: HttpClient) {
    super(http);
    this.setUrl('pizza');
  }

}
