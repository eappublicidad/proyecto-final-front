import { HeaderComponent } from '../pages/home/components/header/header';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StateComponent } from '../pages/home/components/state/state';
import { PostComponent } from '../pages/home/components/post/post';
import { ScrollComponent } from '../pages/home/components/scroll/scroll';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { FooterPostComponent } from '../pages/home/components/post/footer-post/footer-post';
import { FooterHomeComponent } from '../pages/home/components/footer-home/footer-home';
import { Proxy } from './../helpers/proxy/proxy';
import { UserProxy } from '../helpers/proxy/user.proxy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HeaderComponent,
    FooterPostComponent,
    FooterHomeComponent,
    StateComponent,
    PostComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SignInPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    FooterHomeComponent,
    FooterPostComponent,
    MyApp,
    LoginPage,
    StateComponent,
    PostComponent,
    ScrollComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpClient,
    Proxy,
    UserProxy
  ]
})
export class AppModule {
}
