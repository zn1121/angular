import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './firstchild.component.html',
})
export class FirstchildComponent implements OnInit {

  constructor() { }
  value:string;

  ngOnInit() {
  }
  @Output() appendValue = new EventEmitter();
  msg(e){
    if(e.keyCode == 13){
      this.append();
      this.value = "";
    }
  }
  append(){
      this.appendValue.emit(new Msg(this.value, false));
  }
}
export class Msg {
  constructor(public title: string, public done: boolean) { }
}