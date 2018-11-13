import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})

export class Page1Page {
  @ViewChild('map') mapElement: ElementRef;

  latr: number;
  langr: number;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
  this.latr = 0; this.langr = 0;
  }
}
