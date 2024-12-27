import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import {
  DropdownSize,
  DropdownColorType,
  MenuDirection,
  MenuAlignment,
} from './lit-dropdown-types.js';
import {
  dropdownSizeValue,
  dropdownColorValue,
  menuDirectionValue,
} from './style-parametors.js';

const arrowDirectionClassNames = {
  [MenuDirection.LEFT]: 'arrowLeft',
  [MenuDirection.TOP]: 'arrowTop',
  [MenuDirection.RIGHT]: 'arrowRight',
  [MenuDirection.BOTTOM]: '',
};

const menuAlignmentClassNames = {
  [MenuAlignment.RIGHT]: 'rightAlignment',
  [MenuAlignment.LEFT]: 'leftAlignment',
};

@customElement('lit-dropdown')
export class LitDropdown extends LitElement {
  @property({ type: String }) type: DropdownColorType =
    DropdownColorType.PRIMARY;

  @property({ type: String }) size: DropdownSize = DropdownSize.SMALL;

  @property({ type: String }) menuDirection: MenuDirection =
    MenuDirection.BOTTOM;

  @property({ type: String }) alignment: MenuAlignment = MenuAlignment.LEFT;

  @property({ type: String }) label: string = '';

  @state() protected menuIsOpen: boolean = false;

  _onOuterClick = (event: MouseEvent) => {
    const path = event.composedPath();

    const clickInside =
      path.includes(this) || this.contains(event.target as Node);

    if (!clickInside && this.menuIsOpen) {
      this._onToggle();
    }
  };

  _onToggle = () => {
    this.menuIsOpen = !this.menuIsOpen;
    if (this.menuIsOpen) {
      document.addEventListener('click', this._onOuterClick);
    } else {
      document.removeEventListener('click', this._onOuterClick);
    }
  };

  _renderButton = () => html`
    <button
      @click="${this._onToggle}"
      class="dropleft button ${this.size} ${this.menuIsOpen
        ? 'clicked'
        : ''} ${this.type} ${arrowDirectionClassNames[this.menuDirection]}"
    >
      ${this.label}
    </button>
  `;

  render() {
    return html`
      <div class="container">
        ${this._renderButton()}
        <div
          class="menu ${this.menuIsOpen ? 'open' : ''} ${this
            .menuDirection} ${menuAlignmentClassNames[this.alignment]}"
        ></div>
      </div>
    `;
  }

  static styles = [
    dropdownSizeValue,
    dropdownColorValue,
    menuDirectionValue,
    css`
      .container {
        position: relative;
      }
      .dropleft {
        box-shadow: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }

      .dropleft.arrowLeft {
        flex-direction: row-reverse;
      }

      .dropleft::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: '';
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
      }

      .dropleft.arrowLeft::after {
        margin-left: 0;
        margin-right: 0.255em;
        transform: rotateZ(90deg);
      }
      .dropleft.arrowRight::after {
        transform: rotateZ(-90deg);
      }
      .dropleft.arrowTop::after {
        transform: rotateZ(180deg);
      }
      .menu {
        position: absolute;
        z-index: 1000;
        display: none;
        min-width: 10rem;
        padding: 0.5rem 0;
        font-size: 1rem;
        color: #212529;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0.25rem;
      }
      .menu.open {
        display: flex;
      }
    `,
  ];
}
