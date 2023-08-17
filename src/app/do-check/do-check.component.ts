import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.models';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.css']
})
export class DoCheckComponent implements OnInit {

  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
