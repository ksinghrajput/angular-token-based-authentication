import { Component, OnInit } from '@angular/core';
import { MainHeaderComponent } from '../main-header/main-header.component';
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  isLogedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
