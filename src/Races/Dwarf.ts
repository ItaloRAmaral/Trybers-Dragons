import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _raceInstance = 0;

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}