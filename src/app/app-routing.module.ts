
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './khoapham/contacts/contacts.component';
import { ContactDetailComponent } from './khoapham/contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './khoapham/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
  { path: 'contact', component: ContactsComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routesConfig),CommonModule],
  declarations: [
    PageNotFoundComponent,
    ContactsComponent,
    ContactDetailComponent
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
