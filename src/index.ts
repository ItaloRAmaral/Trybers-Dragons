import Battle, { PVP, PVE } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Objetos do tipo Character
const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

// Usando metodo levelUp no Player 1

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Objeto do tipo Monster
const monster1 = new Monster(34, 78);

// Objeto do tipo Dragon
const monster2 = new Dragon();

// Objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// Funçao runBattles
function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };