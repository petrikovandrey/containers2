class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(character);
    return this;
  }

  addAll(...array) {
    array.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray(mySet) {
    return Array.from(mySet);
  }
}
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
export { Character, Team };
