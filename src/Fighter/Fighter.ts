import Energy from '../Energy';

export interface FighterMain {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterMain {
  attack(enemy: FighterMain): void;
  special?(enemy: FighterMain): void;
  receiveDamage(attackPoints: number): number;
  levelUp(): void;
} 