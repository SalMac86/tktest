import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the Results page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class Results {
barChart: any  
@ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController,
  public navParams: NavParams) {
  }


  ionViewDidLoad() {
    // console.log(this.navParams.get("test"));
    var thisTest = this.navParams.get("test");
    console.log('ionViewDidLoad Results');
    // console.log("\nthisTest = "+thisTest['Avoiding']+"\n");
    for (let key in thisTest){
      console.log("The key is: "+key+"\nand the value is: "+thisTest[key]+"\n");
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
     type: 'bar',
     data: {
       labels: [
           'Avoiding',
           'Accommodating',
           'Compromising',
           'Competing',
           'Collaborating'
         ],
       datasets: [{
         data: [
           thisTest['Avoiding'],
           thisTest['Accommodating'],
           thisTest['Compromising'],
           thisTest['Competing'],
           thisTest['Collaborating'],
         ],
         backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)'
         ],
         borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)'
         ],
         borderWidth: 1
       }]
     },
     options: {
       scales: {
         yAxes: [{
           ticks: {
             beginAtZero:true,
             max: 12,
             stepSize: 2
           }
         }]
       },
       legend: {
         display: false
      },
      tooltips: {
         enabled: false
      }
     }
   });
  }

}
