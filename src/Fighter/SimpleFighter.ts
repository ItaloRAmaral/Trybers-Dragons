export interface SimpleFighterMain {
  lifePoints: number;
  strength: number;
}

export default interface SimpleFighter extends SimpleFighterMain {
  attack(enemy: SimpleFighterMain): void;
  receiveDamage(attackPoints: number): number;
}