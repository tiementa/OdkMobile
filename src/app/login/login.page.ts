import { Component, OnInit } from '@angular/core';
import { IonicRestService } from '../ionic-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
nom : any;
prenom: any;

heure = new Date;
  constructor(
    private service: IonicRestService,
  ) {
   
   }

  ngOnInit() {
    this.nom = this.service.getNom();
    this.prenom = this.service.getPrenom();
    this.heure;
  }

}
