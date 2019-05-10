import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../model/games.model';
@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000/games';
games:Games[];
  getGames() {
    return this.http.get<Games[]>(this.baseUrl);
  }
  ngOnInit() {
    this.getGames()
      .subscribe((data: Games[]) => {
        this.games = data;
      });
    console.log(this.games);
}}
