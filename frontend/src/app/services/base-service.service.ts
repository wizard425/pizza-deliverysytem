import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  url: string | undefined;

  constructor(protected http: HttpClient) { }


  public setUrl(url: string) {
    this.url = url;
  }

  public create(model: T): Observable<T> {
    let ret = null;
    if (this.controlUrl())
      ret = this.http.post<T>(environment.baseUrl + this.url, model);
    if (ret == null)
      throw Error("Fehler");
    return ret;
  }

  public get(id: number): Observable<T> {
    let ret: Observable<T> = new Observable<T>();
    if (this.controlUrl())
      ret = this.http.get<T>(environment.baseUrl + this.url + "/" + id);
    return ret;
  }

  public update(model: T): Observable<T> {
    let ret: Observable<T> = new Observable<T>();
    if (this.controlUrl())
      ret = this.http.put<T>(environment.baseUrl + this.url, model);
    return ret;
  }

  public delete(id: number): Observable<number> {
    let ret: Observable<number> = new Observable<number>();
    if (this.controlUrl())
      ret = this.http.delete<number>(environment.baseUrl + this.url + "/" + id);;
    return ret;
  }

  public getAll(): Observable<T[]> {
    let ret : Observable<T[]> = new Observable<T[]>();;
    if (this.controlUrl())
      ret = this.http.get<T[]>(environment.baseUrl + this.url);
    return ret;
  }

  private controlUrl(): boolean {
    if (this.url != null || this.url != undefined) {
      return true;
    } else {
      throw Error("URL not set");
    }
  }

}
