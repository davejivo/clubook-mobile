import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
	  //benefitsApiUrl = 'https://fathomless-thicket-58677.herokuapp.com/api/benefits?token=';
	  //loginUrl = 'https://fathomless-thicket-58677.herokuapp.com/api/login';
	  benefitsApiUrl = 'http://localhost:8100/api/benefits?token=';
	  clubsApiUrl = 'http://localhost:8100/api/clubs?token=';
	  loginUrl = 'http://localhost:8100/api/login';

  constructor(public http: HttpClient) {
  	console.log('Hello RestServiceProvider Provider');
  }

  getBenefits(token) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');

    
  	return new Promise(resolve => {
  	   console.log('Hello call rest: ' + this.benefitsApiUrl+token);
    	this.http.get(this.benefitsApiUrl+token,
    	{headers: headers}
    )
    .subscribe(data => {
      		resolve(data);
    	}, err => {
      		console.log(err);
    	});
    });
  }

  getClubs(token){
      let headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Headers', '*');


      return new Promise(resolve => {
          console.log('Hello call rest: ' + this.clubsApiUrl+token);
          this.http.get(this.clubsApiUrl+token,
              {headers: headers}
          )
              .subscribe(data => {
                  resolve(data);
              }, err => {
                  console.log(err);
              });
      });
  }

  login(username,password) {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Content-Type', 'x-www-form-urlencoded');

    let data = {
            'Action': 'Login',
            'username': username,
            'password': password
    };

    
  	return new Promise(resolve => {
  	   console.log('login call rest post: ' + this.loginUrl);
    	this.http.post(this.loginUrl,data, {headers: headers})
    .subscribe(data => {
      		resolve(data);
    	}, err => {
      		console.log(err);
    	});
    });
  }


}
