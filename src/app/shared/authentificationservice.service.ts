import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {agent} from '../model/agent';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationserviceService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  listagent: agent[];

  public charger() {
    this.http.get<agent[]>('http://localhost:3000/agents/').subscribe(
      (data) => {
        this.listagent = data;
      }
    );
  }

  log;
  mdp;
  test: boolean = false;

  login(log, mdp) {
    console.log(this.listagent);
    for (let i = 0; i < this.listagent.length; i++) {
      if ((this.listagent[i].login == log) && (this.listagent[i].mdp == mdp)) {
        this.router.navigate(['acceuil']);
        this.test = true;
      }

    }
    if (this.test == false) {
      alert('verifier votre mot de passe');
    }

  }


}

