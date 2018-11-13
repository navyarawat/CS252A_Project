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
	// public query: any;
	constructor(public bgService: BgServiceProvider, private formBuilder: FormBuilder, public platform: Platform, public navCtrl: NavController) {
		// this.verses = "Wait for it"
		//        this.loaderCtrl = false ;
	}

	showVerses() {
        // document.getElementById("loader").style.display = 'block';
	//this.loaderCtrl = true ;
		this.platform.ready().then(() => {
			console.log("LOG1");

			// console.log("qry : ", this.query);
			// this.query = "";
			// this.bgService.load(this.query).then(data =>{
			//   console.log("LOG2");
			//   this.verses = JSON.parse(data);
			//   console.log(data);
			// });
			let qdata = { "shloka0": "Shining through the functions of all the organs, (yet) devoid of all the organs; unattached, and verily the supporter of all; without quality, and the perceiver of qualities;", "shloka1": "O son of Prtha, by meditating with a mind which is engaged in the yoga of practice and which does not stray away to anything else, one reaches the supreme Person existing in the effulgent region.", "shloka2": "On the other hand, know tamas, which deludes all embodied beings, to be born of ignorance. O scion of the Bharata dynasty, that binds through inadvertence, laziness and sleep.", "shloka3": "The Blessed Lord said: O unblemished one, two kinds of steadfastness in this world were spoken of by Me in the days of yore-through the Yoga of Knowledge for the men of realization; through the Yoga of Action for the yogis.", "shloka4": "When the illumination that is knowledge radiates in this body through all the doors (of the senses), then one should know that sattva has increased greatly.", "success": 1 };
            let resp = [
                {
                    "text" : qdata.shloka0,
                    "num" : "Shloka - 1"
                },
                {
                    "text" : qdata.shloka1,
                    "num" : "Shloka - 2"
                },
                {
                    "text" : qdata.shloka2,
                    "num" : "Shloka - 3"
                },
                {
                    "text" : qdata.shloka3,
                    "num" : "Shloka - 4"
                },
                {
                    "text" : qdata.shloka4,
                    "num" : "Shloka - 5"
                }
            ];
	    //this.loaderCtrl = false ;
			this.verses = resp;
            // console.log(this.verses.shloka0);
		});
	}

	openFavSlokas() {
	this.navCtrl.push(Page1Page);
    }

}
