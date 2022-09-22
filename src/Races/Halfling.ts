import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _raceInstance = 0;

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}
