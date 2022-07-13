import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import {Character} from '../models/character';
//import { fromFetch } from 'rxjs/fetch';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public url: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = Global.url;
   }

   pruebas(){
       return "Hola mundo!!";
   }

   getCharacter(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
       return this._http.get(this.url, {headers: headers}); 
   }


}