
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
// material
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BasicComponent } from './basic/basic.component';
import { MailService } from './mail.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { KhoaphamComponent } from './khoapham/khoapham.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WordsComponent } from './khoapham/words/words.component';
import { PersonComponent } from './khoapham/person/person.component';
import { ListPersonComponent } from './khoapham/list-person/list-person.component';
import { ParentComponent } from './khoapham/parent.component';
import { ChildComponent } from './khoapham/child.component';
import { LearnPipeComponent } from './khoapham/learn-pipe/learn-pipe.component';
import { IpComponent } from './khoapham/ip.component';
import { RoundPipe } from './khoapham/round.pipe';
import { HttpModule } from '@angular/http';
import { WeatherAppComponent } from './khoapham/weather-app/weather-app.component';
import { FormComponent } from './khoapham/form/form.component';
import { SignUpComponent } from './khoapham/sign-up/sign-up.component';
import { ContactsComponent } from './khoapham/contacts/contacts.component';
import { ContactDetailComponent } from './khoapham/contact-detail/contact-detail.component'
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './khoapham/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    BasicComponent,
    DynamicFormComponent,
    KhoaphamComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    WeatherAppComponent,
    FormComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
