import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Extra } from '../models/extra.model';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExtraService extends BaseService<Extra> {


  
  constructor(override http: HttpClient) {
    super(http);
    this.setUrl('extra');
  }

}
