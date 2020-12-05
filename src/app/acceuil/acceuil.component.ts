import {Component, OnInit} from '@angular/core';
import {ClientserviceService} from '../shared/clientservice.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(public cs: ClientserviceService) {
    this.cs.afficherclients();
  }

  searchValue: string;
/*
  affiche: boolean = false;
  sommerendement: number;

  show(value) {
    this.affiche = !this.affiche;
    this.sommerendement = value;
  }*/




  ngOnInit(): void {


  }

}
