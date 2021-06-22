export class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if(this.members.has(character)){
            return "Персонаж уже добавлен";
        }
        this.members.add(character);
    }
    addAll(...array) {
        array.forEach(element => {
            this.members.add(element);
        });
    }
    toArray(mySet) {
        return Array.from(mySet);
    }
}


export class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
    // levelUp() {
    //     console.log(this);
    //     if (this.health === 0) {
    //         return "нельзя повысить левел умершего";
    //     }
    //     this.level += 1;
    //     this.attack += this.attack * 0.2;
    //     this.defence += this.defence * 0.2;
    //     this.health = 100;
    //     console.log(this);
    // }
}
