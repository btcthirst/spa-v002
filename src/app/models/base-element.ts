import { ElementOptions } from "./element-options";

export class BaseElement<T>{
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type:string;
    options:{key: string, value: string}[];

    constructor(options: ElementOptions = {}) {
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.type = options.type || "";
        this.options= options.options || []
    }
}