import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ClientserviceService} from '../shared/clientservice.service';
import {ActivatedRoute} from '@angular/router';
import {client} from '../model/client';

@Component({
  selector: 'app-modifyclient',
  templateUrl: './modifyclient.component.html',
  styleUrls: ['./modifyclient.component.css']
})
export class ModifyclientComponent implements OnInit {

  constructor(private f: FormBuilder, public cs: ClientserviceService, private activatedRoute: ActivatedRoute) {
  }

  /*form = this.f.group({
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
*/
  client: client;
  ident;

  ngOnInit(): void {
    this.ident = this.activatedRoute.snapshot.params['id'];
    this.cs.getclientbyid(this.ident).subscribe(
      (data) => {
        this.client = data;
      }
    );
  }

}
