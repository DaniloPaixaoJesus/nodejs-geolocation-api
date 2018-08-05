import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-partner',
  templateUrl: './form.partner.component.html',
  styleUrls: ['./form.partner.component.scss']
})
export class FormPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  voltar() {
    window.history.back();
  }

}
