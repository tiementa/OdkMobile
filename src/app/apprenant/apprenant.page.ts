import { Component, OnInit } from '@angular/core';
import { Apprenant, IonicRestService } from '../ionic-rest.service';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.page.html',
  styleUrls: ['./apprenant.page.scss'],
})
export class ApprenantPage implements OnInit {
  listes:any;
  constructor(private serviceApp:IonicRestService) { }

  ngOnInit() {
    this.listeApp();
  }

  listeApp(){
    this.serviceApp.listeApprenant().subscribe((apprenant:any)=>{
      this.listes=apprenant;
      console.log(this.listeApp);
    })
  }

}
