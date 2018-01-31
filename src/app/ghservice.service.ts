import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GhService {

  endpoint = 'https://api.github.com/users/';
  githubInfo:any[] = []
  
  constructor(private _http: Http) { }

  cargarRepos(usuario:string = 'camigomez35'){
    return new Promise((resolve, reject)=> {
      var link:string = this.endpoint + usuario + "/repos"
      this._http.get(link).map(res=>res.json()).subscribe(
        data => {
          this.githubInfo = data
          resolve(this.githubInfo)
        })
  })}
}
