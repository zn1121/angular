import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { APage } from '../a/a';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,public http:HttpClient) {
  }
  ionViewDidLoad(){
  }
  goabout(){
    this.navCtrl.push(APage);
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
}
