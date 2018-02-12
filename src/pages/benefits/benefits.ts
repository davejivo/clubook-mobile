import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html'
})
export class BenefitsPage {
	
  selectedBenefits: any;
  

  constructor(public navCtrl: NavController,public navParams: NavParams, public restProvider: RestProvider) {
  	
  	this.selectedBenefits = navParams.get ("selectedBenefits");
  	
  	alert ("selectedBenefits: test: " + this.selectedBenefits[0].club.name);
    


  	
  }

  choosebenefit() {
  	alert ("choosebenefit");

  }


}
