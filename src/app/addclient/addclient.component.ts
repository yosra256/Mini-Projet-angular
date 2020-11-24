import {Component, OnInit} from '@angular/core';
import {ClientserviceService} from '../shared/clientservice.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private f: FormBuilder, public cs: ClientserviceService) {
  }

  /*form = this.f.group({
    id: ['', Validators.required],
    cin: ['', Validators.required],
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    numero: ['', [Validators.required]]

  });

  get id() {
    return this.form.get('id');
  }*/

  ngOnInit(): void {
  }

}
