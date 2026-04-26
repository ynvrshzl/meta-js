/** @todo Note: this is not an actual fetch from github/ynvrshzl/metalang... that process will come in the future when needed! */

/**
 * This is a sample snippet of what HTML constructor code could look like using meta-js
 * Copyright (c) Hazl, 2026
*/

/** 
 * @description HTML Component construction interface 
 * @example new HTML("div")
 * @todo in the future, when the built-in methods become too large, make sub-modular classes for handling specific parts of the HTML element. and then a method to select a specific 'kit' of modules, only when needed!
 * @todo in the future, we return the HTML element itself, in the constructor, so we don't akwardly access the element via "const element = HTML('div').element"
 */
export class HTML {
    constructor(tag) {
        return document.createElement(tag);
    }
    /** attach/mount this element */
    inside(target){
        target.appendChild(this);
        return this;
    }
    /** Apply a comma-separated list of CSS classes to apply to an HTML element  */
    css(...classes) {
        this.classList.add(...classes)
        return this;
    }
    /** Set any arbitrary attribute in the system */
    set(key, value) {
        this.setAttribute(key, value);
        return this;
    }
    /** 
     * The 'mset' (Multiple set) operation will apply an array of HTML element attribute.  E.g. HTML('button').mset(['type', 'button']) 
     * @param { Array } argsv  of type array
     */
    mset(argsv) {
        argsv.forEach(([k, v]) => {
            try {
                this.target.setAttribute(k, v);
            } catch (error) {
                console.error(error);
            }
        })
    }    
    /** alias for button.onclick */
    __executes__(func) {
        this.onclick = func;
        return this;
    }
    /** output content text string */
    text(string){
        this.textContent = string;
        return this;
    }
    /** chain (compose) any number of HTMLClassInstances */
    compose(...children){
        [...children].forEach(html_class_i => this.appendChild(html_class_i.element));
        return this;
    }
    /** edit inline html (alias for innerHTML) */
    html(string){
        this.innerHTML = string;
        return this;
    }
    /** simply logs the element in the console for inspection */
    log() {
        console.log(this);
        return this;
    }
    /** (inline-css) operation to set inline css for an HTML element. */
    icss(string) {
        this.style.cssText += string;
        return this;
    }
    /** @todo perhaps this should be an externally defined icon logic for attaching an icon to an HTML instance? */
    icon(string){
        /** example of bootstrapping html meta to create an html meta icon (lol) */
        const i = new HTML('i').inside(this).text(string).css('material-symbols-outlined');
        return this;
    }
}









export class Template {

}
export class Component {
    constructor(){

    }
}
export class Pattern {

}
/** @todo this probably isn't how we'll package reuseable templates, but it's an idea! */
export const templates = {
    section: () => new HTML('section').css('spacer')
}