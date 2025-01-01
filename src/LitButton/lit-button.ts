import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ColorType, SizeType, WidthType } from '../types/types.js';
import { sizeStyles, colorStyles, widthStyles } from '../styles/styles.js';

@customElement('lit-button')
export class LitButton extends LitElement {
  @property({ type: String }) type: ColorType = ColorType.PRIMARY;

  @property({ type: String }) size: SizeType = SizeType.SMALL;

  @property({ type: String }) width: WidthType = WidthType.DEFAULT;

  render() {
    return html`<button class="${this.type} ${this.size} ${this.width}">
      <slot></slot>
    </button>`;
  }

  static styles = [
    sizeStyles,
    colorStyles,
    widthStyles,
    css`
      button {
        border: none;
        cursor: pointer;
        border-radius: 0 !important;
      }
    `,
  ];
}
