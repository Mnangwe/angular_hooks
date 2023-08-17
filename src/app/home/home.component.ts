import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public obj: User = {
    id: 5,
    name: "Lunje"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
