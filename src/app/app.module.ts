import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { Lobby } from '../pages/lobby/lobby';
import { Question } from '../pages/question/question';
import { History } from '../pages/history/history';
import { Results } from '../pages/results/results';
import { Landing } from '../pages/landing/landing';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';

import { MyApp } from './app.component';

import { AppUsers } from '../providers/app-users';
import { Questions } from '../providers/questions';
import { TestResults } from '../providers/test-results';

let injections: any[] = [
    MyApp,
    Lobby,
    Question,
    History,
    Results,
    Landing,
    Register,
    Login
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUsers,
    Questions,
    TestResults
  ]
})
export class AppModule {}
