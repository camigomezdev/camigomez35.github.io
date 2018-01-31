import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  name = 'Maria Camila ';
  lastName = 'Gómez Rpo';
  message = {message: 'Words are very unnecessary. They can only do harm. Enjoy the silence.',
  autor: 'Martin Gore'}

  constructor() { }

  ngOnInit() {}

}
