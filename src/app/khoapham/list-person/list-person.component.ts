import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople =[
    {name: 'simple', age:25},
    {name: 'D', age:15},
    {name: '^^', age:5},
  ]
  constructor() { }

  ngOnInit() {
  }
  removePerSonByName(name:string){
    const index = this.arrPeople.findIndex(e=> e.name===name);
    this.arrPeople.splice(index,1);
  }

}
