import 'rxjs/add/operator/map';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BgServiceProvider } from '../../providers/bg-service/bg-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BgServiceProvider]
  })

export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  public result: any;
  public verses: any;
  constructor(public bgService: BgServiceProvider, private formBuilder: FormBuilder, public platform: Platform, public navCtrl: NavController) {
    this.verses = "Wait for it"    
  }

  showVerses() {
  this.platform.ready().then(() => {
  console.log("LOG1");
  // this.bgService.load().then(data =>{
  //   console.log("LOG2");
  //   this.verses = JSON.parse(data);
  //   console.log(data);
  // });
  let resp = {
    "n" : 3,
    "slokas" : [
      {
        "text" : "aa",
        "chap" : 1,
        "num" : 4
      }, 
      {
        "text" : "I am the Karma and I am Indra of gods I am hell, jo b hu m hi hu.",
        "chap" : 3,
        "num" : 14
      } ,
      {
        "text" : "aa",
        "chap" : 11,
        "num" : 12
      }  
    ]
    };
    this.verses = resp ;
  });
  }

  currLocation() {
    this.navCtrl.push(Page1Page);
  }

}

