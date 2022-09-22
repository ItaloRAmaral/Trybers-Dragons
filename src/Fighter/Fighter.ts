import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface FighterMain {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterMain {
  attack(enemy: FighterMain | SimpleFighter): void;
  special?(enemy: FighterMain): void;
  receiveDamage(attackPoints: number): number;
  levelUp(): void;
} 