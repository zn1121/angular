import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './secondchild.component.html',
})
export class SecondchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() count;
  @Input() arr;
  @Output() delIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  del(e){
    this.delIndex.emit(e);
  }
  change(e,i) {
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(e);
  }
}