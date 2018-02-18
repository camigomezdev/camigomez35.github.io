import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  city = 'Medellín'
  country = 'Colombia'

  personalLinks = {
    twitter: 'https://www.twitter.com/camigomez318',
    facebook: 'https://www.facebook.com/mcgomez319',
    linkedin: 'https://www.linkedin.com/in/camigomez35',
    github: 'https://github.com/camigomez35',
    instagram: 'https://www.instagram.com/camigomez35/',
    email: 'camigomez35@gmail.com',
    corpEmail: 'camigomez@experimentality.co'
  }

  constructor() { }

  ngOnInit() {
  }

}
