import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  message = 'you have got mail ';
  constructor() { }
}
