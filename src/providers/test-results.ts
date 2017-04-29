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
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io:8080/api"
  path: string = "/TestResults"
  altPath: string = "/AppUsers"
  saveTest(testAnswers){
    return this.http.post(
      this.baseUrl + this.path,
      testAnswers
      )
  }
  
  getTest(token, userId){
    return this.http.get(
    // "http://sp-17-salvatore-jbrownssf.c9users.io:8080/api/TestResults?filter=%7B%22where%22%3A%20%7B%22userId%22%3A%20%2259002c84eae7b8c7d63c7e95%22%7D%7D&access_token=AxF5VwRK9I5t6Sbo3sYyxWWB6A19MCgPba8y2T1PbkLyU5QB06CzyAJ02lAfzWUG",
      this.baseUrl + this.path +
      '?filter[where][userId]=' + userId +
      '&access_token=' + token
      // '?filter[include][TestResults]&filter[where][userId]=' +
      // userId
      )
  }

}
