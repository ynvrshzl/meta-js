import * as Sys from "./__system__.js"

/**
 * this is where memory is stored, in a meta-language program.
 */
export class Stack {

    /**
     * the stack initializes with
     */
    constructor(){
        
    }

    /**
     * create a piece of data, with an id, and value.
     */
    register({id, data}){
        
    }
}

class ID {
    constructor(id){
        this.id = id;
    }
}

/**
 * a program is the main block of a computer program
 */
export class Program  {
    
    /**
     * what is the mental model, when a new program is created?
     */
    constructor(id) {
        /**
         * create a new id
         */
        this.id = new ID(id);
        /**
         * create a memory registry for the program
         */
        this.stack = new Stack().register({id: this.id, data: this });
    }
    /**
     * add a new thread to the program. essentially, a sub-program, with it's own enviornment, separate from the rest.
     */
    thread(){}

}
/**
 * a sub-program, domain, enviornment. this is the classical concept of a "scope" in programming.
 */
export class Thread {

}

/**
 * a "Data" block stores all basic memory in a program.
 */
export class Data extends Sys.Abstract {

    super(id) {

        this.id = id;
        this.value = null;

    }
    /**
     * assign a value to this Data block
    */
   store(x) {
       this.value = x;
       return this;
    }
}

export class Log {
    
    constructor(id) {
        this.id = id;
    }
    print(string){
        console.log(string);
    }
}

/**
 * This block provides a visual console, directly inside the HTML Document. an alternative to the DevTools console
 */
export class Console {
    constructor(id){
        this.id = id;
    }
    print(message){
        document.querySelector(".console pre.output").innerHTML = message;
    }
}