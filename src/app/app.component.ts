import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  personagens;

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.http.get<any>('https://swapi.co/api/people/').subscribe((dados) => {
      this.personagens = dados.results;
    });
  }
}
