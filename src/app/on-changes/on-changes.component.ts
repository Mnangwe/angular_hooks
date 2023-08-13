import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {
  @Input() data!: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    let cur = changes['data'].currentValue
    console.log(cur)
  }


  ngOnInit(): void {
  }

}
