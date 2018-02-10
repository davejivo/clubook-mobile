import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BenefitsPage } from '../benefits/benefits';


@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
	
  //users: any;
  benefits: any;
  selectedBenefits: any;
  cards: any;
  token: any;

  constructor(public navCtrl: NavController,public navParams: NavParams, public restProvider: RestProvider) {
  	
  	this.token = navParams.get ("token");
    this.selectedBenefits  = [];
  	this.getBenefits();
  	


  	/*this.benefits = [{"_id":"5a6de9df6307964094a780ac","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"http://www.mcc.co.il/st_new_stores.html#6","__v":0,"club":{"name":"חבר","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead731"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ad","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"www.multi.azrieli.com/%D7%9E%D7%95%D7%A6%D7%A8-298-%D7%A9%D7%A7%D7%9D-%D7%90%D7%9C%D7%A7%D7%98%D7%A8%D7%99%D7%A7.aspx","__v":0,"club":{"name":"מולטי עזריאלי","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead730"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ae","title":"רשת חנויות שקם אלקטריק","description":"3% הנחה","category":"מוצרי חשמל","link":"http://db.hot.co.il/asp/results.asp?keywords=%F9%F7%ED&cityl=0&catel=0","__v":0,"club":{"name":"הוט","implementMethod":"מועדון","id":"5a6dd91b734d1d63031971f8"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}}]; */

  	/* this.cards=[{"_id":"5a6dd24fafb6271d40ead72c","implementMethod":"אשראי","provider":"לאומי קארד","name":"executive","image":"images/leumi-card.png","bg":"images/executive.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72b","implementMethod":"אשראי","provider":"לאומי קארד","name":"לאומי קארד","image":"images/leumi-card.png","bg":"images/leumi_card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72d","implementMethod":"אשראי","provider":"Diners","name":"You","image":"images/dinners_you.jpg","bg":"images/you-bg.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72e","implementMethod":"מועדון","provider":"You","name":"You","image":"images/you_club.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72f","implementMethod":"מועדון","provider":"","name":"Dream Card","image":"images/dream-card.png","bg":"images/dream-card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead730","implementMethod":"אשראי","provider":"","name":"מולטי עזריאלי","image":"images/leumi-card.png","bg":"images/multi_azrieli.png","__v":0},{"_id":"5a6dd24fafb6271d40ead731","implementMethod":"אשראי","provider":"","name":"חבר","image":"images/hever_logo.png","bg":"images/hever.png","__v":0},{"_id":"5a6dd24fafb6271d40ead732","implementMethod":"אשראי","provider":"ויזה","name":"כאל","image":"images/cal_logo.png","bg":"images/cal_logo.png","__v":0},{"_id":"5a6dd24fafb6271d40ead734","implementMethod":"מועדון","provider":"","name":"iStudent","image":"images/istudent.png","bg":"images/istudent.png","__v":0},{"_id":"5a6dd24fafb6271d40ead736","implementMethod":"אשראי","provider":"visa","name":"מפתח דיסקונט","image":"images/discont.png","bg":"images/discont.png","__v":0},{"_id":"5a6dd24fafb6271d40ead735","implementMethod":"מועדון","provider":"","name":"עדיף","image":"images/adif.png","bg":"images/adif.png","__v":0},{"_id":"5a6dd24fafb6271d40ead733","implementMethod":"מועדון","provider":"","name":"יותר","image":"images/Yoter.png","bg":"images/Yoter.png","__v":0},{"_id":"5a6dd91b734d1d63031971f8","implementMethod":"מועדון","provider":"","name":"הוט","image":"images/hot_logo.png","bg":"images/hot.png"},{"_id":"5a6ddbd2734d1d63031972e5","implementMethod":"אשראי","provider":"Diners","name":"Fly Card","image":"images/fly_card_logo.png","bg":"images/fly_card.png"}]; */
  }

  chooseCard(index) {
  	let card = document.getElementById('card'+index);
    let cardTitle = document.getElementById('cardTitle'+index);
  	//alert ("chooseCard: " + index + " card: " + card.className);
  	if( card.className.indexOf('card-z-depth-5') >= 0){
      // selected
      var selectedIndex = this.selectedBenefits.findIndex(function(benefit) {
        return benefit.club.name == cardTitle.innerText;
      });
      this.selectedBenefits.splice (selectedIndex,1);
      card.className = card.className.replace(" card-z-depth-5", "");

    }else{
      //alert ("chooseCard: " + index + " card: " +this.benefits [index].club.name);
      this.selectedBenefits.push (this.benefits [index]);
      card.className+=' card-z-depth-5';
    }
    //alert ("chooseCard: " + index + " card: " + card.className);
  // Found world
  }
  	

  

  getBenefits() {
    this.restProvider.getBenefits(this.token)
    .then(data => {
      this.benefits = data;
      console.log('benefits: ' + this.benefits);
    });
  }

  navigateToBenefits (){
   // let sentElements = [];
    //this.selectedBenefits.forEach(element => {
      //let benefit = benefits [];
    //console.log(product);

    //});
    this.navCtrl.push(BenefitsPage , {selectedBenefits:this.selectedBenefits});
  }

}
