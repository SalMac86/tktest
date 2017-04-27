import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestResults provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TestResults {
  
  constructor(public http: Http) {
    console.log('Hello TestResults Provider');
  }
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io/api"
  path: string = "/TestResults"
  
  saveTest(testAnswers){
    return this.http.post(
      this.baseUrl + this.path,
      testAnswers
      )
  }

}
