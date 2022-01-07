var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";
/**
 * An example custom input element.
 *
 * @slot label - The input's label.
 * @fires value-change - Emitted when the control's value changes.
 * @fires clear - Emitted when the clear button is activated.
 * @csspart label - The input's label.
 */
let CustomInput = class CustomInput extends LitElement {
    constructor() {
        super(...arguments);
        /** The input's value attribute. */
        this.value = "";
    }
    handleInput() {
        this.value = this.input.value;
        this.dispatchEvent(new CustomEvent("value-change"));
    }
    handleClearClick() {
        this.value = "";
        this.dispatchEvent(new CustomEvent("clear"));
    }
    render() {
        return html `
      <label part="label" for="custom-input-control">
        <slot name="label"></slot>
      </label>

      <div class="input-wrapper">
        <input
          id="custom-input-control"
          .value=${this.value}
          @input=${this.handleInput}
        />
        <button @click=${this.handleClearClick}>Clear Value</button>
      </div>
    `;
    }
};
CustomInput.styles = css `
    :host {
      --height: 40px;

      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .input-wrapper {
      display: flex;
      gap: 6px;
    }

    input {
      height: var(--height);
    }
  `;
__decorate([
    query("#custom-input-control")
], CustomInput.prototype, "input", void 0);
__decorate([
    property()
], CustomInput.prototype, "value", void 0);
CustomInput = __decorate([
    customElement("custom-input")
], CustomInput);
export { CustomInput };
//# sourceMappingURL=custom-input.js.map