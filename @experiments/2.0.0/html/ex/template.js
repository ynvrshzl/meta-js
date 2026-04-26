/** 
 * @todo: implement this! ...basically, if you want the ability to compose your own tempaltes/components live inside the code... instead of creating them in the meta lib? so it's like a bootstrap 
 * @example const icon = new Template("icon").html("i").css("material-symbols-outlined").string("search");
 * @todo what's the diff between Template, Module, Blueprint, and Component?
*/
export class Template extends HTML {
    constructor(){}
}
/**
 * What is this? Theorycrafting an export object model.
 * 
 * - it makes more sense to write... new Templates.System.Button()
 * - rather than new SystemTemplateButton()
 * - or "system/templates/button.js"
 */
export const Tempaltes = {
    System: {
        Btn
    }
}