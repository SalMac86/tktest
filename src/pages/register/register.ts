import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUsers } from '../../providers/app-users';
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  user: any = {}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  
  signupForm(form){
    console.log(form);
    if(form.invalid){
      return alert("Please fill in all required fields!");
    }
    // this.appUsers.register(this.user);
  }

}
