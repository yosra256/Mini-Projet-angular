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


  ngOnInit(): void {
  }

}
