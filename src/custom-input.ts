import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";

/**
 * An example custom input element.
 *
 * @slot label - The input's label.
 * @fires change - Emitted when the control's value changes.
 * @fires clear - Emitted when the clear button is activated.
 * @csspart label - The input's label.
 */
@customElement("custom-input")
export class CustomInput extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  @query("#custom-input-control")
  input!: HTMLInputElement;

  /** The input's value attribute. */
  @property() value = "";

  private _handleChange() {
    this.value = this.input.value;
  }

  private _handleClearClick() {}

  override render() {
    return html`
      <label part="label" for="custom-input-control">
        <slot name="label"></slot>
      </label>
      <input id="custom-input-control" @change=${this._handleChange} />
      <button @click=${this._handleClearClick}>Clear Value</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "custom-input": CustomInput;
  }
}
