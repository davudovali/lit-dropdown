import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";

@customElement('lit-dropdown-menu-elem')
export class LitDropdownMenuDivider extends LitElement {
  @property({type: String}) type: 'link' | 'button' = 'button'

  render() {
    return html`<div></div>`
  }
}