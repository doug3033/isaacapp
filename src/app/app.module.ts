import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProdCreatePage } from '../pages/prod-create/prod-create';
import { ProdDetailsPage } from '../pages/prod-details/prod-details';
import { AddrCreatePage } from '../pages/addr-create/addr-create';
import { FormsModule } from '@angular/forms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProdCreatePage,
    ProdDetailsPage,
    AddrCreatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProdCreatePage,
    ProdDetailsPage,
    AddrCreatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp],
})
export class AppModule {}
