import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {BenefitsPage} from '../benefits/benefits';
import {ShopsPage} from "../shops/shops";

declare function require(name: string);

const _ = require('lodash');


@Component({
    selector: 'page-cards',
    templateUrl: 'cards.html'
})
export class CardsPage {
    @ViewChild(Slides) slides: Slides;
    user: any;
    rollerBenefits: any;
    selectedClubs: any;
    allBenefits: any;
    cards: any;
    token: any;
    clubs: any;


    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

        this.token = navParams.get("token");
        this.user = navParams.get("user");
        this.selectedClubs = [];
        this.getBenefits();
        this.getClubs();
        // this.slides.autoplay(1000);

        ////////


        /*this.benefits = [{"_id":"5a6de9df6307964094a780ac","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"http://www.mcc.co.il/st_new_stores.html#6","__v":0,"club":{"name":"חבר","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead731"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ad","title":"רשת חנויות שקם אלקטריק","description":"5% הנחה","category":"מוצרי חשמל","link":"www.multi.azrieli.com/%D7%9E%D7%95%D7%A6%D7%A8-298-%D7%A9%D7%A7%D7%9D-%D7%90%D7%9C%D7%A7%D7%98%D7%A8%D7%99%D7%A7.aspx","__v":0,"club":{"name":"מולטי עזריאלי","implementMethod":"אשראי","id":"5a6dd24fafb6271d40ead730"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}},{"_id":"5a6de9df6307964094a780ae","title":"רשת חנויות שקם אלקטריק","description":"3% הנחה","category":"מוצרי חשמל","link":"http://db.hot.co.il/asp/results.asp?keywords=%F9%F7%ED&cityl=0&catel=0","__v":0,"club":{"name":"הוט","implementMethod":"מועדון","id":"5a6dd91b734d1d63031971f8"},"location":{"place_id":"ChIJ6z0wKJ23AhURdQ5gh9OwY5Q","description":"שקם אלקטריק - סניף ביל\"ו, קרית עקרון, ישראל"}}]; */

        /* this.cards=[{"_id":"5a6dd24fafb6271d40ead72c","implementMethod":"אשראי","provider":"לאומי קארד","name":"executive","image":"images/leumi-card.png","bg":"images/executive.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72b","implementMethod":"אשראי","provider":"לאומי קארד","name":"לאומי קארד","image":"images/leumi-card.png","bg":"images/leumi_card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72d","implementMethod":"אשראי","provider":"Diners","name":"You","image":"images/dinners_you.png","bg":"images/you-bg.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72e","implementMethod":"מועדון","provider":"You","name":"You","image":"images/you_club.png","__v":0},{"_id":"5a6dd24fafb6271d40ead72f","implementMethod":"מועדון","provider":"","name":"Dream Card","image":"images/dream-card.png","bg":"images/dream-card.png","__v":0},{"_id":"5a6dd24fafb6271d40ead730","implementMethod":"אשראי","provider":"","name":"מולטי עזריאלי","image":"images/leumi-card.png","bg":"images/multi_azrieli.png","__v":0},{"_id":"5a6dd24fafb6271d40ead731","implementMethod":"אשראי","provider":"","name":"חבר","image":"images/hever_logo.png","bg":"images/hever.png","__v":0},{"_id":"5a6dd24fafb6271d40ead732","implementMethod":"אשראי","provider":"ויזה","name":"כאל","image":"images/cal_logo.png","bg":"images/cal_logo.png","__v":0},{"_id":"5a6dd24fafb6271d40ead734","implementMethod":"מועדון","provider":"","name":"iStudent","image":"images/istudent.png","bg":"images/istudent.png","__v":0},{"_id":"5a6dd24fafb6271d40ead736","implementMethod":"אשראי","provider":"visa","name":"מפתח דיסקונט","image":"images/discont.png","bg":"images/discont.png","__v":0},{"_id":"5a6dd24fafb6271d40ead735","implementMethod":"מועדון","provider":"","name":"עדיף","image":"images/adif.png","bg":"images/adif.png","__v":0},{"_id":"5a6dd24fafb6271d40ead733","implementMethod":"מועדון","provider":"","name":"יותר","image":"images/Yoter.png","bg":"images/Yoter.png","__v":0},{"_id":"5a6dd91b734d1d63031971f8","implementMethod":"מועדון","provider":"","name":"הוט","image":"images/hot_logo.png","bg":"images/hot.png"},{"_id":"5a6ddbd2734d1d63031972e5","implementMethod":"אשראי","provider":"Diners","name":"Fly Card","image":"images/fly_card_logo.png","bg":"images/fly_card.png"}]; */
    }


    chooseCard(index) {
        let card = document.getElementById('card' + index);
        let cardTitle = document.getElementById('cardTitle' + index);
        // alert ("chooseCard: " + index + " card: " + card.className);
        if (card.className.indexOf('card-z-depth-5') >= 0) {
            // selected
            var selectedIndex = this.selectedClubs.findIndex(function (club) {
                return club.name == cardTitle.innerText;
            });
            this.selectedClubs.splice(selectedIndex, 1);
            card.className = card.className.replace(" card-z-depth-5", "");

        } else {
            //alert ("chooseCard: " + index + " card: " +this.benefits [index].club.name);
            this.selectedClubs.push(this.clubs[index]);
            card.className += ' card-z-depth-5';
        }
        //alert ("chooseCard: " + index + " card: " + card.className);
        // Found world
    }


    getBenefits() {
        this.restProvider.getBenefits(this.token)
            .then(data => {
                this.rollerBenefits = data;
                console.log('benefits: ' + this.rollerBenefits);
                // console.log(this.benefits[0].club.imageName);
            });
    }

    getClubs() {
        this.restProvider.getClubs(this.token)
            .then(data => {
                this.clubs = data;
                console.log('clubs: ' + this.clubs);

            });
    }

    navigateToNextPage(user) {
        this.restProvider.getBenefits(this.token)
            .then(data => {
                this.allBenefits = data;
                let selectedClubsNames = this.selectedClubs.map(club => {
                    return club.name
                });
                //filter only benefits of selected clubs
                let benefits = this.allBenefits.filter(benefit => {
                    // if (selectedClubsNames.indexOf(benefit.club.name) >= 0 && benefit.title.toLowerCase().indexOf(this.user.user) >= 0){
                    if (benefit.club)
                        if (selectedClubsNames.indexOf(benefit.club.name) >= 0) {
                            return benefit;
                    }
                });
                //benefits which i DO NOT have
                let otherBenefits = _.difference(this.allBenefits, benefits);
                //groupBy benefits by shop
                let shops = _(benefits)
                    .groupBy('title')
                    .map(function (items, title) {
                        let test = _.find(user.shops, { 'name': title});
                        return {
                            name: title,
                            image: _.find(user.shops, function (shop) {
                               return shop.name == title;
                            }).image,
                            benefits: items
                        };
                    }).value();
                if (shops.length == 1) {
                    this.navigateToBenefits(shops[0], otherBenefits);
                }
                else {
                    // this.navCtrl.push(ShopsPage , {user:this.user, token: this.token, selectedClubs:this.selectedClubs});
                    this.navigateToShops(shops);
                }

            });
    }

    navigateToBenefits(shop, otherBenefits) {
        this.navCtrl.push(BenefitsPage, {
            user: this.user,
            token: this.token,
            selectedClubs: this.selectedClubs,
            benefits: shop.benefits,
            shop : shop,
            otherBenefits: otherBenefits,
            allBenefits: this.allBenefits
        });
    }

    navigateToShops(shops) {
        this.navCtrl.push(ShopsPage, {
            user: this.user,
            token: this.token,
            selectedClubs: this.selectedClubs,
            shops: shops,
            rollerBenefits: this.rollerBenefits,
            allBenefits: this.allBenefits
        });
    }

}
