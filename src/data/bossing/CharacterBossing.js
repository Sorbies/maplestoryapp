import { bossData } from "../../constants/BossData";

//Class representing a character in the bossing app
export class CharacterBossing {

    constructor(name, key) {
        this.name = name;             //IGN
        this.key = key;               //key for react rendering
        this.preset = "None";         //Preset being used
        this.progress = {};           //Storage for boss clear statuses

        //Init the character's clears as all not done
        for (const boss in bossData) { this.progress[boss] = false; }
    }

//getter methods ===============================================================
    getName() { return this.name; }
    getKey() { return this.key; }
    getPreset() { return this.preset; }
    getProgress() { return this.progress; }
    getBossStatus(boss) { return this.progress[boss]; }

//setter methods ===============================================================
    setName(name) { this.name = name; }
    setPreset(preset) { this.preset = preset; }
    setProgress(progress) { this.progress = progress; }
    setBossStatus(boss, status) { this.progress[boss] = status; }

//methods that will be handy if data structures get updated (w/o destroying existing data) ===============================================================
    addBoss(boss, status = false) { this.progress[boss] = status;}

//standard class operations ===============================================================

    //method to check for equality
    equals(other) {

        //check equality of progress obj
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

    //deep copy method for this class
    copy() {
        let newCopy = new CharacterBossing(this.name, this.key);
        newCopy.preset = this.preset;
        newCopy.progress = {...this.progress};
        return newCopy;
    }

    //conversion method from regular object to this class
    //needed for use with local storage
    static fromJSON(obj) {
        if (obj == null) return new CharacterBossing("", 0);

        let convertedObj = new CharacterBossing(obj.name, obj.key);
        convertedObj.preset = obj.preset;
        convertedObj.progress = {...obj.progress};

        return convertedObj;
    }
}