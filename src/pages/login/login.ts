import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CardsPage } from '../cards/cards';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	user: any;
  companies: any;
  token: any;

  constructor(public loadingCtrl: LoadingController ,public navCtrl: NavController, public restProvider: RestProvider) {
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

  login (loginUser: any){
     this.user = loginUser;
    console.log ("loginUser is user:" + loginUser.username + " password: " + loginUser.password) ;
     this.restProvider.login(loginUser.username,loginUser.password)
    .then(data => {
      this.token = data;
      console.log('response: ' + data);
      this.navigateToCards();
    });
    
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


    private navigateToCards() {
        this.presentLoading();
        this.restProvider.getUser(this.token)
            .then(data => {
                this.user = data;
                this.navCtrl.push(CardsPage , {user: this.user[0], token:this.token});
            });
    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }
}
