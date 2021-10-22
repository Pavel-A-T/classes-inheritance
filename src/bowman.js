import Character from './character';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defense = 25;
  }
}
