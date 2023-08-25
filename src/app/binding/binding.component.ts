import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  btnStatus: any = "false"

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>() 

  constructor() { }

  ngOnInit(): void { 
  }

  handler(){
    this.notify.emit("This is child's message!")
  }

}
