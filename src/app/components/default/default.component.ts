import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
//import { User } from "src/app/models/User/user";
//import { UserService } from "src/app/services/user.service";
import { Character } from "src/app/models/character";
import { CharacterService } from "src/app/services/character.service";

@Component({
    selector: 'default',
    templateUrl: './default.component.html',
    providers: [CharacterService]
})
export class DefaultComponent implements OnInit{
    public title: string;
    public names: any = [];
    public locat: any = [];
    public epi: any = [];
    public statu: any = [];
    // public conteo: any;
    public characters: Array<Character> = [];


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _characterService: CharacterService
    ){
        this.title = 'Personajes';
        //this.names = '';
       // this.conteo = 0;

        
    }

    ngOnInit(){
       // console.log('default.component cargado correctamente');
      // console.log( this._characterService.pruebas());

      this._characterService.getCharacter().subscribe(
            response => {
                this.characters = response.results;
              
             
                console.log('variable caracteres ' , this.characters);
             
                response.results.forEach((obj: {origin : any, location : any, episode : Array<object>}) => {
                   this.names.push(obj.origin.name);
                   this.locat.push(obj.location.name);
                   this.epi.push(obj.episode.length);
                   //this.statu.push(obj.status);
                   

                  

                  // return this.name.name;
                  // console.log('variable name ' + this.names);
                  //console.log('status: ' , this.statu);
                  // console.log('origen: ' , obj.origin.name );
                   //console.log('obj solo: ' , obj.status);
                   //console.log('locacion: ' + obj.location.name);
                   //console.log('episodio: ' + obj.episode.length);

                });

                /*
                if(this.statu == 'Alive'){
                    console.log('estan vivo: ' , this.statu);
                   } */
                
               // this.datos = Object.values(this.names);
               //console.log('variable name afuera ' , this.names);
               //console.log('variable locat afuera ' , this.locat);
               //console.log('variable epi afuera ' , this.epi);
              
               //console.log(this.name);
               // console.log(response.status == 'success');
            },
            error => {
                console.log(error);
            }
        );
        
    }

}