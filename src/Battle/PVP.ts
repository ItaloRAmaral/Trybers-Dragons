import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(fighterOne: Fighter, fighterTwo: Fighter) {
    super(fighterOne);
    this._player1 = fighterOne;
    this._player2 = fighterTwo;
  }

  fight(): number {
    let result = 0;
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1) {
        result = -1;
      } else {
        result = 1;
      }
    }
    return result;
  }
}

// public fight(): number {
//   this._player1.attack(this._fighterTwo);
//   this._fighterTwo.attack(this._fighterOne);

//   return this._fighterOne.lifePoints === -1 ? -1 : 1;
// }
