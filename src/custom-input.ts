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
@customElement("custom-input")
export class CustomInput extends LitElement {
  static override styles = css`
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

  @query("#custom-input-control")
  input!: HTMLInputElement;

  /** The input's value attribute. */
  @property() value = "";

  handleInput(): void {
    this.value = this.input.value;
    this.dispatchEvent(new CustomEvent("value-change"));
  }

  handleClearClick(): void {
    this.value = "";
    this.dispatchEvent(new CustomEvent("clear"));
  }

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-input": CustomInput;
  }
}
