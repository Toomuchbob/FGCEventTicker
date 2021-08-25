import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './Game';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  private gameSource = new BehaviorSubject(new Game('Guilty Gear: STRIVE', 33945));
  currentGame = this.gameSource.asObservable();

  constructor() { }

  changeSelectedGame(game: Game) {
    this.gameSource.next(game);
  }
}
