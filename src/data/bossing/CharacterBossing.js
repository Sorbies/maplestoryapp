import { bossData } from "../../constants/BossData";

export class CharacterBossing {
    constructor(name, key) {
        this.name = name;
        this.key = key;
        this.preset = "None";
        this.progress = {};

        for (const boss in bossData) { this.progress[boss] = false; }
    }

    getName() { return this.name; }
    getKey() { return this.key; }
    getPreset() { return this.preset; }
    getProgress() { return this.progress; }
    getBossStatus(boss) { return this.progress[boss]; }

    setName(name) { this.name = name; }
    setPreset(preset) { this.preset = preset; }
    setProgress(progress) { this.progress = progress; }
    setBossStatus(boss, status) { this.progress[boss] = status; }

    addBoss(boss, status = false) { this.progress[boss] = status;}

    //checks if all parameters between two objects match up
    equals(other) {
        let isProgressEqual = true;
        for (const boss in this.progress) {
            if (this.progress[boss] !== other.progress[boss]) {
                isProgressEqual = false;
            }
        }
        if( this.name === other.name &&
            this.key === other.key &&
            this.preset === other.preset &&
            isProgressEqual) {return true;}
        return false;
    }

    copy() {
        let newCopy = new CharacterBossing(this.name, this.key);
        newCopy.preset = this.preset;
        newCopy.progress = {...this.progress};
        return newCopy;
    }

    static fromJSON(obj) {
        if (obj == null) return new CharacterBossing("", 0);

        let convertedObj = new CharacterBossing(obj.name, obj.key);
        convertedObj.preset = obj.preset;
        convertedObj.progress = {...obj.progress};

        return convertedObj;
    }
}