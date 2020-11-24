import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  styleUrls: ['./deleteclient.component.css']
})
export class DeleteclientComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router)
  {
    this.router.navigate(['acceuil']);
  }

  ngOnInit(): void {
  }

}
