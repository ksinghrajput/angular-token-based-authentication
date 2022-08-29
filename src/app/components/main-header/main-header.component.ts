import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
