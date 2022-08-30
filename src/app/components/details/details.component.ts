import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userData: any;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserDetails().subscribe(res => {
      this.userData = JSON.parse(JSON.stringify(res))
      console.log("Kishan", res);
    })
  }

}
