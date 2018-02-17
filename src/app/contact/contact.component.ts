import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  city = 'Medellín'
  country = 'Colombia'
  email = 'camigomez35@gmail.com';
  skype = '@camigomez318';
  github = '@camigomez35';
  linkedin = 'https://www.linkedin.com/in/camigomez35/';
  constructor() { }

  ngOnInit() {
  }

}
