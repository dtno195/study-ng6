import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts=[
    {id:1,name:'Duc',phone:'123'},
    {id:2,name:'s1',phone:'456'},
    {id:3,name:'SD',phone:'789'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
