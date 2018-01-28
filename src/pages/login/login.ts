import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	user: any;
  companies: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  //	this.companies = [
  //    {code: "FOX"} , 
  //    {code: "ELEC"} , 
  //    {code: "ELAL"}
  //  ]

    
    this.user = {};
    this.initializeItems ();

  }

  onItemClicked(idx){
    console.log ("index is:" + idx);
  }

  initializeItems() {
    this.companies = [
      "FOX" , 
      "ELEC" , 
      "ELAL"
    ]
  }

  onInput(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.companies = this.companies.filter((company) => {
        return (company.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  

}
