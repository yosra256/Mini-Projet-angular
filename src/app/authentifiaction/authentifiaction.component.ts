import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {client} from '../model/client';
import {agent} from '../model/agent';
import {AuthentificationserviceService} from '../shared/authentificationservice.service';

@Component({
  selector: 'app-authentifiaction',
  templateUrl: './authentifiaction.component.html',
  styleUrls: ['./authentifiaction.component.css']
})
export class AuthentifiactionComponent implements OnInit {
  listagent: agent[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient, public as: AuthentificationserviceService) {
    this.http.get<agent[]>('http://localhost:3000/agents/').subscribe(
      (data) => {
        this.listagent = data;
      }
    );
  }

  myimage: string = 'assets/images/muscu2.jpg';
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


  ngOnInit(): void {
  }

}
