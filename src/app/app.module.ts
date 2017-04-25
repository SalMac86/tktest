import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Lobby } from '../pages/lobby/lobby';
import { Question } from '../pages/question/question';
import { History } from '../pages/history/history';
import { Results } from '../pages/results/results';
import { MyApp } from './app.component';

import { AppUser } from '../providers/app-user';
import { Questions } from '../providers/questions';
import { TestResults } from '../providers/test-results';

let injections: any[] = [
    MyApp,
    Lobby,
    Question,
    History,
    Results
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser,
    Questions,
    TestResults
  ]
})
export class AppModule {}
