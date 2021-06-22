class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      return new Error('Персонаж уже добавлен');
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

export { Team };
