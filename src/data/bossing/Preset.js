import { bossData } from "../../constants/BossData";

//class representing a preset in the bossing app
export class Preset {

    constructor(name, key) {
        this.name = name;          //Name of preset
        this.key = key;            //key for react rendering
        this.difficulties = {};    //storage for boss difficulties selected

        //init all bosses in this preset as being skipped
        for (const boss in bossData) { this.difficulties[boss] = 0; }
    }

//getter methods ===============================================================
    getName() { return this.name; }
    getKey() { return this.key; }
    getDifficulties() { return this.difficulties; }
    getBossDifficulty(boss) { return this.difficulties[boss]; }

//setter methods ===============================================================
    setName(name) { this.name = name; }
    setBossDifficulty(boss, diff) { this.difficulties[boss] = diff; }

//methods that will be handy if data structures get updated (w/o destroying existing data) ===============================================================
    addBoss(boss, diff = 0) { this.difficulties[boss] = diff;}

//standard class operations ===============================================================

    //method to check for equality
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

    //deep copy method for this class
    copy() {
        let newCopy = new Preset(this.name, this.key);
        newCopy.difficulties = {...this.difficulties};
        return newCopy;
    }

    //conversion method from regular object to this class
    //needed for use with local storage
    static fromJSON(obj) {
        if (obj == null) return new Preset("", 0);

        let convertedObj = new Preset(obj.name, obj.key);
        convertedObj.difficulties = {...obj.difficulties};

        return convertedObj;
    }
}