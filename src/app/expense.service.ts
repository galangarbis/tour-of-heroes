import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Expense } from './expense';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseUrl = 'http://192.168.0.29:5000/datatableservice/Api';
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getExpense(): Observable<Expense[]>{
    const url = `${this.expenseUrl}/expense`;
    return this.http.get<Expense[]>(url).pipe(
      tap(_ => this.log('fetched expense')),
        catchError(this.handleError('getHeroes', []))
    );
  }

  private log(message: string){
    this.messageService.add(`ExtendService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
