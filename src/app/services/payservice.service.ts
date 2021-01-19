import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayserviceService {

  constructor(private httpClient: HttpClient) { }
  
  sendpayrequest(paydto)
  {
  return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',paydto).pipe(
           map(data  => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
  }
  
}
