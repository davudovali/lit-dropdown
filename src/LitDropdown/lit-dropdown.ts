import { LitElement, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { MenuDirection, MenuAlignment } from './lit-dropdown-types.js';
import { ColorType, SizeType } from '../types/types.js';
import { styles } from './styles.js';

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
  @property({ type: String }) type: ColorType = ColorType.PRIMARY;

  @property({ type: String }) size: SizeType = SizeType.SMALL;

  @property({ type: String }) direction: MenuDirection = MenuDirection.BOTTOM;

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
        : ''} ${this.type} ${arrowDirectionClassNames[this.direction]}"
    >
      ${this.label}
    </button>
  `;

  render() {
    return html`
      <div class="container">
        ${this._renderButton()}
        <slot
          class="menu ${this.menuIsOpen ? 'open' : ''} ${this
            .direction} ${menuAlignmentClassNames[this.alignment]}"
        >
        </slot>
      </div>
    `;
  }

  static styles = styles;
}
