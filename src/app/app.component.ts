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
  proxima;
  anterior;

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.http.get<any>('https://swapi.co/api/people/').subscribe((dados) => {
      this.proxima = dados.next;
      this.anterior = dados.previous;
      this.personagens = dados.results;
    });
  }

  avancar(){
    this.http.get<any>(this.proxima).subscribe((dados) => {
      this.proxima = dados.next;
      this.anterior = dados.previous;
      this.personagens = dados.results;
    });
  }

  retroceder(){
    this.http.get<any>(this.anterior).subscribe((dados) => {
      this.proxima = dados.next;
      this.anterior = dados.previous;
      this.personagens = dados.results;
    });
  }
}
