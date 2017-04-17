import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question-page/question-page';
import { HistoryPage } from '../history/history';
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
    this.navCtrl.push(QuestionPage);
  }
  
  myHistory() {
    this.navCtrl.push(HistoryPage);
  }
}
