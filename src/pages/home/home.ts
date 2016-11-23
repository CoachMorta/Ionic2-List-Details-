import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  showData()
  {
   this.navCtrl.push(DetailsPage);
  }
}
