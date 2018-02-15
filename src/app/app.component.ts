import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  personagem = {};

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.http.get('https://swapi.co/api/people/1/').subscribe((dados) => {
      this.personagem = dados;
    });
  }
}
