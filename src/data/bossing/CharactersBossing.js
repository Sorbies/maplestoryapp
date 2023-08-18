import { CharacterBossing } from "./CharacterBossing";

export class CharactersBossing {
    //if you add properties to this, you must update copy() and fromJSON()
    constructor() {
        this.characters = [];
    }

    getCharacters() { return this.characters; }
    getLength() { return this.characters.length; }

    findCharacterByIndex(index) { return this.characters[index]; }
    //finds a character given a character object. returns null if not found.
    findCharacter(character) {
        let result = null;
        for (const char of this.characters) {
            if (character.equals(char)) result = char;
        }
        return result;
    }
    //finds the index for the 1st instance of given a character object. returns null if not found.
    findIndexOfCharacter(character) {
        let result = null;
        for (let i = 0; i < this.characters.length; i++) {
            if (character.equals(this.characters[i])) {
                result = i;
                break;
            }
        }
        return result;
    }

    addCharacter(character) { this.characters.push(character); }
    deleteCharacter(character) {
        this.characters = this.characters.filter((char) => !char.equals(character));
    }

    swap(index1, index2) {
        if (index1 >= 0 && index1 < this.getLength() && index2 >= 0 && index2 < this.getLength()) {
            [this.characters[index1], this.characters[index2]] = [this.characters[index2], this.characters[index1]];
        }
    }

    copy() {
        let newCharacters = new CharactersBossing();
        for (const character of this.characters) {
            newCharacters.addCharacter(character.copy());
        }
        return newCharacters;
    }

    static fromJSON(obj) {
        if (obj == null) return new CharactersBossing();

        let convertedObj = new CharactersBossing();
        for (const character of obj.characters) {
            convertedObj.addCharacter(CharacterBossing.fromJSON(character));
        }
        return convertedObj;
    }
}