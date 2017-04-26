import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../question/question';
import { History } from '../history/history';
import { AppUsers } from '../../providers/app-users';
/**
 * Generated class for the Lobby page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class Lobby {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appUsers: AppUsers
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lobby');
  }
  
  takeTest() {
    this.navCtrl.push(Question,{
      showHome: true
    });
  }
  
  getHistory(){
    this.navCtrl.push(History,{
      showHome: true
    });
  }
  
  userLogout(){
    // console.log(localStorage.token);
    this.appUsers.logout(localStorage.token);
    this.navCtrl.setRoot(Lobby);
    
  }
}
