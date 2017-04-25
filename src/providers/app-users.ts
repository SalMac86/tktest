import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUsers {

  constructor(
    public http: Http
    ) {
    console.log('Hello AppUser Provider');
  }
  baseUrl: string = "http://sp-17-salvatore-jbrownssf.c9users.io/api"
  path: string = "/AppUsers"
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
      )
  }
}
