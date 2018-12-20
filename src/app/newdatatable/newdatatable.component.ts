import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdatatable',
  templateUrl: './newdatatable.component.html',
  styleUrls: ['./newdatatable.component.css']
})
export class NewdatatableComponent implements OnInit {

  // constructor() { }


  ngOnInit() {
  }
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];

  columns = [
    {prop: 'name'},
    {name: 'Gender'},
    {name: 'Company'}
  ];
}
