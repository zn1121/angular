import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { CPage } from '../c/c';
//import { LoginPage } from '../login/login';
import { BPage } from '../b/b';
//import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = BPage;
  // tab5Root = 'CPage';

  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
    let profileModal = this.modalCtrl.create(CPage)
    profileModal.present();
    },false)
      // document.querySelector('#tab-t0-4').addEventListener('click',()=>{
      //   let profileModal = this.modalCtrl.create(BPage)
      //   profileModal.present();
      //   },false)
    
  }
}
