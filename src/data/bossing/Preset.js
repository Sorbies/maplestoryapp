import { bossData } from "../../constants/BossData";

export class Preset {
    constructor(name, key) {
        this.name = name;
        this.key = key;
        this.difficulties = {};

        for (const boss in bossData) { this.difficulties[boss] = 0; }
    }

    getName() { return this.name; }
    getKey() { return this.key; }
    getDifficulties() { return this.difficulties; }
    getBossDifficulty(boss) { return this.difficulties[boss]; }

    setName(name) { this.name = name; }
    setBossDifficulty(boss, diff) { this.difficulties[boss] = diff; }

    addBoss(boss, diff = 0) { this.difficulties[boss] = diff;}

    equals(other) {
        let isDifficultiesEqual = true;
        for (const boss in this.difficulties) {
            if (this.difficulties[boss] !== other.difficulties[boss]) {
                isDifficultiesEqual = false;
            }
        }
        if( this.name === other.name &&
            this.key === other.key &&
            isDifficultiesEqual) {return true;}
        return false;
    }

    copy() {
        let newCopy = new Preset(this.name, this.key);
        newCopy.difficulties = {...this.difficulties};
        return newCopy;
    }

    static fromJSON(obj) {
        if (obj == null) return new Preset("", 0);

        let convertedObj = new Preset(obj.name, obj.key);
        convertedObj.difficulties = {...obj.difficulties};

        return convertedObj;
    }
}