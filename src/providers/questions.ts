import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Questions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Questions {

  constructor(public http: Http) {
    console.log('Hello Questions Provider');
  }
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io:8080/api"
  path: string = "/Questions"
// Let’s use it and create a method inside of the component that 
  // returns a http get request.

// It should look similar to the http method used in src/providers/app-user.ts. 
// Though there are some differences. 
//      The primary one is the that you_  don’t pass any data. _<mean passing to api?>
// Also you’ll need to make sure that the 
// parameter of the function receives a token.  ^^ ??
// And after the url is declared 
// you need to add to it[http.get request] the __user’s token__ like you did above for logging a user out.
  questioner(token){
    return this.http.get(
      //pass token or just access whatever is in localStorage? who can call questioner?
      this.baseUrl.path + 
      '?access_token=' + token)
      //what is this token doing? is it the user's id or the question's id? 
  }
}
