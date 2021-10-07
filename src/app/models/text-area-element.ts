import { BaseElement } from "./base-element";
import { ElementOptions } from "./element-options";

export class TextAreaElement extends BaseElement<string>{
    controlType= "textarea";
    type: string;
    constructor(options: ElementOptions={}){
        super(options);
        this.type=options["type"] || "text"
    }

}