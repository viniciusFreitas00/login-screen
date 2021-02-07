import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent implements OnInit {
  @ViewChild('email', { static: false }) email: ElementRef;
  @ViewChild('email_label', { static: false }) email_label: ElementRef;
  @ViewChild('password', { static: false }) password: ElementRef;
  @ViewChild('password_label', { static: false }) password_label: ElementRef;

  constructor() {}

  public handleInputBlur(event: any): void {
    let aux = event.target.id;
    let classAux: string;
    if (aux == 'email') {
      classAux =
        this.email.nativeElement.value.trim() == '' ? '' : 'label_selected';
      this.email_label.nativeElement.classList = classAux;
    } else {
      classAux =
        this.password.nativeElement.value.trim() == '' ? '' : 'label_selected';
      this.password_label.nativeElement.classList = classAux;
    }
  }

  ngOnInit(): void {}
}
