import { LitElement } from "lit";
/**
 * An example custom input element.
 *
 * @slot label - The input's label.
 * @fires value-change - Emitted when the control's value changes.
 * @fires clear - Emitted when the clear button is activated.
 * @csspart label - The input's label.
 */
export declare class CustomInput extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    /** The input's value attribute. */
    value: string;
    handleInput(): void;
    handleClearClick(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "custom-input": CustomInput;
    }
}
//# sourceMappingURL=custom-input.d.ts.map