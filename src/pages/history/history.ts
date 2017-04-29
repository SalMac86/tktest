import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TestResults } from '../../providers/test-results';

import { Results } from '../results/results';
/**
 * Generated class for the History page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {
  tests: any = [];
  userId: any;
  token: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public testResults: TestResults) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad History');
    this.token = window.localStorage.getItem("token");
    this.userId = window.localStorage.getItem("userId");
    // this.tests = JSON.parse(window.localStorage.getItem("tests")) || [];
    this.testResults.getTest(this.token, this.userId)
    .map(res => res.json())
    .subscribe(res => {
      this.tests = res;
    }, error => {
      alert("Danger, Will Robinson!");
    });
  
    
    console.log(this.tests);
  }
  
  getResults(test, index){
    this.navCtrl.push(Results,{
      test: test, 
      index: index,
      showHome: true
    });
  }

}
