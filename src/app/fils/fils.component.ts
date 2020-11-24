import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() nombre;
  @Output() msgsomme = new EventEmitter<number>();

  constructor() {
  }

  somme: number;

  calculerrendement() {
    this.somme = this.nombre * 90;
    this.msgsomme.emit(this.somme);
  }

  ngOnInit(): void {
  }

}
