import { Preset } from "./Preset";

export class Presets {
    //if you add properties to this, you must update copy() and fromJSON()
    constructor() {
        this.presets = []; //contains list of presets
    }

//getter methods ===============================================================
    getPresets() { return this.presets; }
    getLength() { return this.presets.length; }

//finder methods ===============================================================

    //index -> preset
    findPresetByIndex(index) { return this.presets[index]; }
    //name -> preset
    findPresetByName(name) { return this.presets.filter(prst => { return prst.name === name })[0]; }
    //preset -> preset
    findPreset(preset) {
        let result = null;
        for (const prst of this.presets) {
            if (preset.equals(prst)) result = prst;
        }
        return result;
    }
    //preset -> index
    findIndexOfPreset(preset) {
        let result = null;
        for (let i = 0; i < this.presets.length; i++) {
            if (preset.equals(this.presets[i])) {
                result = i;
                break;
            }
        }
        return result;
    }

//mutator methods ===============================================================
    addPreset(preset) { this.presets.push(preset); }
    deletePreset(preset) {
        this.presets = this.presets.filter((prst) => !prst.equals(preset));
    }
    swap(index1, index2) {
        if (index1 >= 0 && index1 < this.getLength() && index2 >= 0 && index2 < this.getLength()) {
            [this.presets[index1], this.presets[index2]] = [this.presets[index2], this.presets[index1]];
        }
    }

//standard class operations ===============================================================

    //deep copy for this class
    copy() {
        let newPresets = new Presets();
        for (const preset of this.presets) {
            newPresets.addPreset(preset.copy());
        }
        return newPresets;
    }

    //json obj -> presets (for local storage)
    static fromJSON(obj) {
        if (obj == null) return new Presets();

        //needs to convert each individual preset
        let convertedObj = new Presets();
        for (const preset of obj.presets) {
            convertedObj.addPreset(Preset.fromJSON(preset));
        }
        return convertedObj;
    }
}