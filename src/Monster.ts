import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  // public attack(enemy: SimpleFighter): void {
  //   enemy.receiveDamage(this._strength);
  // }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public receiveDamage(attackPoints: number): number {
    const lifePointsAfterDmg = this.lifePoints - attackPoints;

    if (lifePointsAfterDmg < 0) {
      this._lifePoints = -1;
    } 
    return lifePointsAfterDmg;
  }
}