import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = `https://ui.digitaleast.mobi/assets/images/logo_dessy.svg`;
  error = ''
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void { }

  submit() {
    const { username, password } = this.form.value
    if (this.form.valid && username && password) {
      this.auth.getAuthenticationToken({ username, password }).subscribe(res => {
        const { jwt } = JSON.parse(JSON.stringify(res));
        localStorage.setItem('token', jwt)
        this.router.navigateByUrl('/home');
      })
    } else {
      this.error = 'Username or password invalid'
    }
    this.form.reset();
  }

}
