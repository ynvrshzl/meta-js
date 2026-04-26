import { HTML } from "../HTML.js";

/** 
 * Experimenting, example of Here we setup our own little button component building block 
 * Pre-package a pre-defined button component to use throughout the system (which is inspired by react, which uses react-jsx to bootstrap react!)
*/
export class ButtonComponent {
    constructor() {
        return new HTML("button").set('type', 'button');
    }
}
/** 
 * Meta-pattern (reuseable component/template) in which we can re-use/re-build new elements, from existing ones? liike attaching it to an already existing container, or place before/after... e.g. new HTML('e').spacer('after') or new Tp.Component('Spacer') 
*/
export class SpacerComponent {
    constructor() {
        return new HTML('section').css('spacer');
    }
}