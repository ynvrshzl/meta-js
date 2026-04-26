/** 
 * Copyright (C) 2026 Hazl, Metasys, Metacog, Metalang, Cyberethos humanitarian project.
 * 
 * This script provides a working implementation of HTML, as a primary domain for meta-javascript.
 * Note: this is a working prototype, unstable version, and may change at any time. 
*/
let header;

/** 
 * The "HTML" building block is a foundational unit in web-driven technologies. An HTML block is considered the foundation for graphical, interactive user-interfaces and elements, but does not provide built-in reasoning for layout, interaction handling, and more "expected" packages. This separates domains.
 * @example new HTML("div")
*/
export class HTML {
  
  /**
   * The only user-supplied parameter for this class is the "tag".
  */
  constructor(tag){
    /** 
     * Design motivation: storing the element this way, is the only 
    */
    this.element = document.createElement(tag);
  }
  
  /** 
   * The "css" grammar byte, applies a comma-separated list of css classnames to this HTML element. An abstraction of "HTML.classList.add(...)"
  */
  css(classes){
    this.element.classList.add(...classes)
  }
}
