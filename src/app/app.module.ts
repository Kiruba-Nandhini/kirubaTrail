import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyPage } from './mypage.component';
import {AngularFireModule} from "@angular/fire"
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent,MyPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
