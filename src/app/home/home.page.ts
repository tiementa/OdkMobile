import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicRestService } from '../ionic-rest.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login = {username: '', password: ''};
  submitted = false;
  error = '';
  
  URL = environment.Host;

  constructor(
                public router: Router,
                private loading: LoadingController,
                private http: HttpClient,
                public alertController: AlertController,
                private service: IonicRestService,
  ) {
    localStorage.clear;
  }


  async presentAlert(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Connexion échouée',
      message: 'Identifiant incorrect !',
      buttons: ['ok']
    });
    await alert.present();
  }


  async onLogin(form: NgForm) {
    this.submitted = true;
    const load = await this.loading.create({
        message: 'Patientez...',
        backdropDismiss: false,
        mode: 'ios'
    });
    await load.present();
    if (form.valid) {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
        
        return this.http.get(this.URL + '/conn/'+form.value["username"] + '/' +form.value["password"], {headers})
            .subscribe((response: any) => {
              console.log(response);
                    load.dismiss();
                    console.log(response.nom);
                     if(response){
                       this.service.setNom(response.nom);
                       this.service.setPrenom(response.prenom);
                       //console.log(this.service.getAppConn());
                      this.router.navigate(['/login'], {
                              queryParams: {
                                  nom: response.nom,
                                  prenom: response.prenom,
                                  username: response.login,
                              }
                          });
                    }else{
                      this.presentAlert();
                    }
                }
            );
    }
}
}