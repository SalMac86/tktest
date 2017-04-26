import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Register } from '../register/register';


/**
 * Generated class for the Landing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class Landing {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Landing');
    localStorage.token = null; //just added this to try to not have any tokens before being logged in
  }
  
  userLogin() {
    // console.log("this will go to Login");
    this.navCtrl.push(Login,{
      showHome: true
    });
  }
  
  userRegister() {
    // console.log("this will go to Register");
    this.navCtrl.push(Register, {
      showHome: true
    });
  }

}
