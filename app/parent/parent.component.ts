import { Component, OnInit } from '@angular/core';
import { ComponentService} from '../services/Component.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {
  constructor(private local: ComponentService) { }
  data = [];
  count:number = 0;
  ngOnInit() {
    if(this.local.get('todo')){
      this.data = JSON.parse(this.local.get('todo'));
      this.arrCount();
    }else{
      this.data = [];
    }
  }
  append(value){
    this.data.unshift(value);
    this.arrCount();
    this.local.set('todo', JSON.stringify(this.data));
  }
  del(i){
    this.data.splice(i,1);
    this.arrCount();
    this.local.set('todo', JSON.stringify(this.data));
  }
  arrCount() {
    this.count = 0;
    this.data.forEach((value) => {
      if (value.done == false) {
        this.count++;
      }
    });
  }
  change(i){
    this.arrCount();
    this.local.set('todo', JSON.stringify(this.data));
  }
}