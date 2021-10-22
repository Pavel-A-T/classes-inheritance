import Character from './character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defense = 10;
  }
}
