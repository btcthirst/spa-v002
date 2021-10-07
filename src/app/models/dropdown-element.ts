import { BaseElement } from "./base-element";
import { ElementOptions } from "./element-options";

export class DropDownElement extends BaseElement<string> {
    controlType = "dropdown";
    options: { key: string, value: string }[] = [];

    constructor(options: ElementOptions = {}) {
        super(options);

        this.options = options["options"] || [];
    }

}