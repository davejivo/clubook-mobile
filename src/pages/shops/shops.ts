import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {BenefitsPage} from "../benefits/benefits";

declare function require(name: string);

const _ = require('lodash');


@Component({
    selector: 'page-shops',
    templateUrl: 'shops.html'
})
export class ShopsPage {

    selectedClubs: any;
    benefits: any;
    token: any;
    user: any;
    shops: any;
    /*example of shops:
      0:{name: "רשת חנויות שקם אלקטריק", benefits: Array(2)}
      1:{name: "המשביר לצרכן", benefits: Array(2)}
      2:{name: "רשת חנויות FOX", benefits: Array(2)}*/
    rollerBenefits: any;
    otherBenefits: any;
    allBenefits: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

        this.selectedClubs = navParams.get("selectedClubs");
        this.token = navParams.get("token");
        this.user = navParams.get("user");
        this.shops = navParams.get("shops");
        this.allBenefits = navParams.get("allBenefits");
        this.rollerBenefits = navParams.get("rollerBenefits");
        console.log("token======" + this.token);
        // console.log("shops======" + this.shops);
        // this.getBenefits();
        // alert ("selectedClubs: test: " + this.selectedClubs[0].name);


    }

    navigateToBenefits(shop) {
        this.navCtrl.push(BenefitsPage, {
            user: this.user,
            token: this.token,
            selectedClubs: this.selectedClubs,
            benefits: shop.benefits,
            shop: shop,
            otherBenefits: this.otherBenefits,
            allBenefits: this.allBenefits
        });
    }

    choosebenefit() {
        alert("choosebenefit");

    }


}

