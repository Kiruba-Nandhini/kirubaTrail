import {Component} from "@angular/core";

import {ServicesService} from "../app/services.service";

@Component({
    selector: "app-mypage",
    templateUrl: "mypage.component.html",
    styleUrls: ['mypage.component.css'],
})
export class MyPage{

  constructor() { }
 nametext:string=''
 namearray=[];


 addname(name:string){
  this.namearray.push(name);
  console.log(this.namearray);
  this.nametext=''
 }



}
