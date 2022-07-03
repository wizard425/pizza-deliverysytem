import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'pd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    console.log(this.mapForm());
    this.loginService.login(this.mapForm()).subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['admin/orders']);
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  mapForm(): User {
    return Object.assign(new User(),
      this.form.value)
  }

}
