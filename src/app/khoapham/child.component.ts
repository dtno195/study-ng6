import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
    <h3>{{value}}</h3>
    `
})
export class ChildComponent {
    value = 0;
    // @Output() myClick = new EventEmitter<boolean>();
    // addForParent() {
    //     this.myClick.emit(true);
    // }
    // subForParent(){
    //     this.myClick.emit(false);
    //     console.log(this.myClick)
    // }
}