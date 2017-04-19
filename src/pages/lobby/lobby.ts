import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../question/question';
import { History } from '../history/history';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Lobby');
  }
  
  takeTest() {
    this.navCtrl.push(Question);
  }
  
  getHistory(){
    this.navCtrl.push(History);
  }
}
