import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class DrinkService extends BaseService<Drink> {



  constructor(protected http: HttpClient) {
    super(http);
    this.setUrl('drink');
  }

}
