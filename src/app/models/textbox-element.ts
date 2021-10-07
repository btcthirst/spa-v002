import { BaseElement } from "./base-element";
import { ElementOptions } from "./element-options";

export class TextBoxElement extends BaseElement<string>{
    controlType= "textbox";
    type: string;
    constructor(options: ElementOptions={}){
        super(options);
        this.type=options["type"] || "text"
    }

}