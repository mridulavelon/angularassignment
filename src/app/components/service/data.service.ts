import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private results = new BehaviorSubject([]);
  constructor(private http: HttpClient) {}

  //Storing the results for searchvalue//
  getResults$() {
    return this.results.asObservable();
  }

  //Calling API with searchvalue for getting the response//
  getRequestedData(name: string) {
    try {
      this.http
        .get(`https://api.github.com/search/users?q=${name} in:login`)
        .subscribe((data: any) => this.results.next(data.items));
    } catch (error: any) {
      console.log(error);
    }
  }
}
