import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-menu-divider')
export class LitDropdownMenuDivider extends LitElement {
  render() {
    return html`<div class="divider"></div>`;
  }

  static styles = css`
    .divider {
      width: 100%;
      height: 1px;
      margin: 0.5rem 0;
      background-color: rgba(0, 0, 0, 0.15);
    }
  `;
}
