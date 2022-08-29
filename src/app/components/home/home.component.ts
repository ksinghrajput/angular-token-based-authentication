import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserDetails().subscribe(res => {
      console.log(res);
      this.userDetails = res;
    })
  }

}
