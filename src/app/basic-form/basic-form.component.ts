import { Component, OnInit, ViewChild } from '@angular/core';
import * as o from 'rxjs';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  @ViewChild('formRef') form;

  username: 'Simple1';
  onSubmit(formValue) {

    console.log(formValue);
  }
  ngOnInit() {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.form.valueChanges
      .subscribe(v => console.table(v));

  }

}
