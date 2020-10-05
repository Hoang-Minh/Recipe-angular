import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLogIn: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
  }

  displayEmailValidationError() {}

  toggleMode() {
    this.isLogIn = !this.isLogIn;
  }
}
