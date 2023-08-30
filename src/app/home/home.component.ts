import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // PROMISE
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise working!');
      }, 1000)
    })

    promise.then(res => console.log(res));


    // OBSERVABLE
    const observable = new Observable(subscribe => {
      setTimeout(() => {
        subscribe.next('Observable working');
        
      }, 1000)
    })

    observable.subscribe(res => console.log(res))
  }

}
