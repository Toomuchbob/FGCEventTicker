import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

import { Game } from '../Game';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  game!: Game;

  games: Game[] = [
    new Game('Guilty Gear: STRIVE', 33945),
    new Game('Street Fighter V', 33990),
    new Game('Melty Blood: Type Lumina', 36865)
  ];

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.currentGame.subscribe(game => this.game = game);
  }

  setSelectedGame(game: Game) {
    this.navigation.changeSelectedGame(this.game);
  }

}
