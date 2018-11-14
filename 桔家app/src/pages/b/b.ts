import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gosetting(){
    this.navCtrl.push(SettingPage,{id:1});
  }
  
  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
}
