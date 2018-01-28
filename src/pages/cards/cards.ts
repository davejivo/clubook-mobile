import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
	
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  	this.getUsers();
  }

  chooseCard() {
  	alert ("chooseCard");

  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
