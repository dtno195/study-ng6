import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khoapham',
  templateUrl: './khoapham.component.html',
  styleUrls: ['./khoapham.component.css']
})
export class KhoaphamComponent implements OnInit {
  propertyBiding = true;
  en = 'hello';
  vn = 'xin chao';
  forgot = false;
  // input
  name: string = '';
  constructor() { }

  ngOnInit() {
  }
  toggleForgot(){
    this.forgot = !this.forgot;
  }
  showEvent(event){
    this.name = event.target.value
  }
  isHighlight(){
    if(this.name.length%2===0){
      return 'red';
    }
    else{
      return 'blue';
    }
  }
  checkClass(){
    if(this.name.length%2===0){
      return 'circle';
    }
    else{
      return 'square';
    }
  }
}
