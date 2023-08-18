import { Preset } from "./Preset";

export class Presets {
    //if you add properties to this, you must update copy() and fromJSON()
    constructor() {
        this.presets = [];
    }

    getPresets() { return this.presets; }
    getLength() { return this.presets.length; }

    findPresetByIndex(index) { return this.presets[index]; }
    findPresetByName(name) { return this.presets.filter(prst => { return prst.name === name })[0]; }
    //finds a character given a character object. returns null if not found.
    findPreset(preset) {
        let result = null;
        for (const prst of this.presets) {
            if (preset.equals(prst)) result = prst;
        }
        return result;
    }
    //finds the index for the 1st instance of given a character object. returns null if not found.
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

    addPreset(preset) { this.presets.push(preset); }
    deletePreset(preset) {
        this.presets = this.presets.filter((prst) => !prst.equals(preset));
    }

    swap(index1, index2) {
        if (index1 >= 0 && index1 < this.getLength() && index2 >= 0 && index2 < this.getLength()) {
            [this.presets[index1], this.presets[index2]] = [this.presets[index2], this.presets[index1]];
        }
    }

    copy() {
        let newPresets = new Presets();
        for (const preset of this.presets) {
            newPresets.addPreset(preset.copy());
        }
        return newPresets;
    }

    static fromJSON(obj) {
        if (obj == null) return new Presets();

        let convertedObj = new Presets();
        for (const preset of obj.presets) {
            convertedObj.addPreset(Preset.fromJSON(preset));
        }
        return convertedObj;
    }
}