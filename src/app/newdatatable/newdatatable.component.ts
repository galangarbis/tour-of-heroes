import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-newdatatable',
  templateUrl: './newdatatable.component.html',
  styleUrls: ['./newdatatable.component.css']
})
export class NewdatatableComponent implements OnInit {
  rows = [];
  testResponse: any;
  constructor(private expenseService: ExpenseService,private http: HttpClient) { }

  getExpense(): void {
    // this.expenseService.getExpense().subscribe(data => {
    //   this.testResponse = data;
    //   console.log("I CAN SEE DATA HERE: ", this.testResponse);
    // });
    this.http.get<any>('http://localhost:5000/datatableservice/Api/expense')
      .subscribe(data =>
        // console.log(data)
        this.rows = data
      );
  }

  ngOnInit() {
    this.getExpense();
  }
  columns = [
    {prop: 'id'},
    {name: 'voucher_code'},
    {name: 'nama'},
    {name: 'tanggal_klaim'},
    {name: 'keterangan'},
    {name: 'nominal'}
  ];
}
