import { Component, OnInit } from '@angular/core';

import { GhService } from '../ghservice.service';

@Component({
  selector: 'app-ghcomponent',
  templateUrl: './ghcomponent.component.html',
  styleUrls: ['./ghcomponent.component.css'],
  providers: [GhService]
})
export class GhComponent implements OnInit {

  repos:any
  user:any

  constructor(private _ghService: GhService) {       
    this.callInfo()
  }

  ngOnInit() {
  }

  callInfo(){
    this._ghService.cargarRepos().then( (response) => {
      this.repos = response
      console.log(this.repos)
    })
  }

}
