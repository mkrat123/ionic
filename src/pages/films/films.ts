import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the FilmsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,  public apiProvider: ApiProvider) {


    this.films = this.apiProvider.getFilms();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }
  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
 


}
