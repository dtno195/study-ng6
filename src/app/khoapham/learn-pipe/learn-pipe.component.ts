import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthDay = new Date(2015, 7, 25);
  person = { name: 'Simple', age: 30 }
  //biến truyền từ server xuống
  address = Promise.resolve('45 dãy I ');
  constructor() { }

  ngOnInit() {
  }

}
