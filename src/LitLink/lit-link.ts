import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { SizeType, WidthType } from '../types/types.js';
import { sizeStyles, widthStyles } from '../styles/styles.js';

@customElement('lit-link')
export class LitLink extends LitElement {
  @property({ type: String }) size: SizeType = SizeType.SMALL;

  @property({ type: String }) width: WidthType = WidthType.DEFAULT;

  @property({ type: String }) href: string = '#';

  render() {
    return html`<a class="${this.size} ${this.width}" href="${this.href}">
      <slot></slot>
    </link>`;
  }

  static styles = [
    sizeStyles,
    widthStyles,
    css`
      a {
        display: block;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: black;
        border: none;
        cursor: pointer;
        border-radius: 0 !important;
      }
      a:hover {
        background-color: rgb(248, 249, 250);
      }
      a:active {
        background-color: rgb(13, 110, 253);
        color: white;
      }
    `,
  ];
}
