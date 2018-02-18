import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likeme',
  templateUrl: './likeme.component.html',
  styleUrls: ['./likeme.component.css']
})
export class LikemeComponent implements OnInit {
  experience: Array<any> = [
    {
      date: 'Jul 17 - Actualidad',
      title: 'Desarrolladora de software',
      company: 'Experimentality'
    },
    {
      date: 'Ene 17 - Jun 17',
      title: 'Auxiliar de programación',
      company: 'Universidad de Antioquia, Medellín, Colombia'
    },
    {
      date: 'Nov 15 - Ene 18',
      title: 'Auxiliar de investigación',
      company: 'G.I. Ingeniería y Software, Universidad de Antioquia'
    }
  ];
  education: Array<any> = [
    {
      date: 'Feb 13 - Mar 18',
      title: 'Ingeniera de Sistemas',
      company: 'Universidad de Antioquia, Medellín, Colombia'
    },
    {
      date: 'Feb 09 - Dic 12',
      title: 'Bachiller Academica',
      company: 'San Francisco Javier, Medellín, Colombia'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
