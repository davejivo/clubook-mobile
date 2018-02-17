import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
declare function require(name:string);
const _ = require('lodash');

@Component({
  selector: 'page-benefits',
  templateUrl: 'benefits.html'
})
export class BenefitsPage {
	
  selectedClubs: any;
  benefits: any;
  token: any;
  user: any;
  shop: any;
  allBenefits: any;
  rollerBenefits: any;
  otherBenefits: any;

  constructor(public navCtrl: NavController,public navParams: NavParams, public restProvider: RestProvider) {
  	
  	this.selectedClubs = navParams.get("selectedClubs");
  	this.token = navParams.get ("token");
  	this.user = navParams.get ("user");
  	this.shop = navParams.get ("shop");
  	this.allBenefits = navParams.get("allBenefits");
  	console.log("token======" + this.token);
  	// this.getBenefits();
      this.benefits = navParams.get("benefits");

      this.rollerBenefits = this.allBenefits.filter(benefit => {
          if (!benefit.club && benefit.title == this.shop.name){
              return benefit //we want benefits which are not related to any club to be on side roller
          }
      });
      console.log("benefits:",this.rollerBenefits);
  }

  choosebenefit() {
  	alert ("choosebenefit");

  }


}

