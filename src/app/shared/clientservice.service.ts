import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {client} from '../model/client';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  clientsUrl: string = 'http://localhost:3000/clients/';
  test = true;
  show = 'afficher';

  constructor(private f: FormBuilder, private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  form = this.f.group({
    id: ['', Validators.required],
    cin: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    numero: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern('^[0-9]*$')]]

  });

  get id() {
    return this.form.get('id');
  }

  get cin() {
    return this.form.get('cin');
  }

  get numero() {
    return this.form.get('numero');
  }


  affiche: boolean = false;
  sommerendement: number;

  showw(value) {
    this.affiche = !this.affiche;
    this.sommerendement = value;
  }

  afficherlist = 'afficher';
  listclients: client[];

  getclients() {
    return this.http.get<client[]>(this.clientsUrl);

  }

  public goToAdd() {
    this.router.navigate(['add']);
  }

  nbr: number;

  public afficherclients() {

    this.getclients().subscribe(
      (data) => {
        this.listclients = data;
        console.log(this.listclients);
        this.nbr = 0;
        for (let i = 0; i < this.listclients.length; i++) {
          this.nbr++;
        }
      }
    );
  }

  ajouterclient(cl: client) {
    return this.http.post<client>(this.clientsUrl, cl);
  }

  public addclient(form) {
    // this.test = false;
    this.ajouterclient(form).subscribe(
      (data) => {
        console.log('ajouuuut');
        this.router.navigate(['acceuil']);
      },
      (error) => {
        alert('Le client existe deja');
      }
    );
  }

  public goToModify(id) {
    this.router.navigate(['modify/' + id]);
  }

  modify(id: number, cl: client) {
    return this.http.put<client>(this.clientsUrl + id, cl);
  }


  public count() {
    this.nbr = 0;
    for (let i = 0; i < this.listclients.length; i++) {
      this.nbr++;
    }
    return this.nbr;
  }

  modifyclient(id, form) {

    this.modify(id, form).subscribe(
      (data) => {
        console.log('midication effectuée');
        console.log(this.listclients);
        this.router.navigate(['acceuil']);
      },
      (error) => {
        alert('l\'id est invalid');
      }
    );

  }

  delete(id: number) {
    return this.http.delete(this.clientsUrl + id);
  }

  deleteclient(id) {
    //this.test = false;
    this.delete(id).subscribe(
      (data) => {
        this.router.navigate(['delete/' + id]);
        console.log('delete success');
      }
    );
  }

  critere: string;
  valeur;
  indice: number;
  idr;
  nomr;
  prenomr;
  cinr;
  numeror;
  affichcl = false;


  rechercheindice1(critere, valeur) {
    this.affichcl = !this.affichcl;
    this.indice = -1;
    for (let i = 0; i < this.listclients.length; i++) {
      if ((critere == 'id') && (this.listclients[i].id == valeur)) {
        this.indice = i;
      }
      if ((critere == 'cin') && (this.listclients[i].cin == valeur)) {
        this.indice = i;
      }
      if ((critere == 'nom') && (this.listclients[i].nom == valeur)) {
        this.indice = i;
      }
      if ((critere == 'prenom') && (this.listclients[i].prenom == valeur)) {
        this.indice = i;
      }
      if ((critere == 'numero') && (this.listclients[i].numero == valeur)) {
        this.indice = i;
      }

    }
    console.log(this.indice);
    if (this.indice != -1) {
      this.idr = this.listclients[this.indice].id;
      this.nomr = this.listclients[this.indice].nom;
      this.prenomr = this.listclients[this.indice].prenom;
      this.cinr = this.listclients[this.indice].cin;
      this.numeror = this.listclients[this.indice].numero;
    } else {
      this.affichcl = false;
      alert('ce client n\'existe pas');
    }
  }

  gotomodifier(id) {
    this.router.navigate(['modify/' + id]);
  }

  gotoacceuil() {
    this.router.navigate(['acceuil']);
  }

  deconnecter() {
    this.router.navigate(['authentification']);
  }

  public getclientbyid(id: number) {
    return this.http.get<client>(this.clientsUrl + id);
  }


}
