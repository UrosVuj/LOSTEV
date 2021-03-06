import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  type: string;
  sent: boolean;

  constructor(private ruter: Router) { }

  ngOnInit(): void {
    this.type = JSON.parse(localStorage.getItem('type'));
    this.sent = false;
  }

  send() {
    this.sent = true;
  }

}
