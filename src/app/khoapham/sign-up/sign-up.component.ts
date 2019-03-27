import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  // templateUrl: './sign-up.component.html',
  template:`
  <form (ngSubmit) = "onSubmit();"  [formGroup] = "formSignUp">
    <br><br>
    <input type="text" placeholder="Email" formControlName = "email" >
    <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched" >Email is required</p>
    <br><br>
    <input type="password" placeholder="Password" formControlName = "password">
    <br><br>
    <div formGroupName ="subject">
      <label for=""><input type="checkbox"  name="nodeJs" formControlName = "nodeJS">node js </label>
      <label for=""><input type="checkbox"  name="angularJs" formControlName = "angular">angular js </label>
      <label for=""><input type="checkbox"  name="reactJs" formControlName = "reactJs">react js </label>
    </div>
    <br><br>
    <button >Submit</button>
  </form>`
  ,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formSignUp : FormGroup;

  constructor(private fb : FormBuilder) { 
    
  }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: '',
      subject: this.fb.group({
        nodeJS: false,
        angular: true,
        reactJs: false
      }),
     
    });
  }
  onSubmit(){
    console.log(this.formSignUp.value);

  }
}
