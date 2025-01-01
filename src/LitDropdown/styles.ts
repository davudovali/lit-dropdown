import { css } from 'lit';
import { sizeStyles, colorStyles } from '../styles/styles.js';

export const styles = [
  sizeStyles,
  colorStyles,
  css`
    .container {
      position: relative;
      overflow: visible;
    }

    .dropleft {
      width: auto;
      white-space: nowrap;
      box-shadow: none;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
    }

    .dropleft:focus {
      outline: none;
    }

    .dropleft.arrowLeft {
      flex-direction: row-reverse;
    }

    .dropleft::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.5em;
      vertical-align: 0.255em;
      transform: translateY(1px);
      content: '';
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }

    .dropleft.arrowLeft::after {
      margin-left: 0;
      margin-right: 0.5em;
      transform: rotateZ(90deg) translateX(-1px);
    }
    .dropleft.arrowRight::after {
      transform: rotateZ(-90deg) translateX(-1px);
    }
    .dropleft.arrowTop::after {
      transform: rotateZ(180deg);
    }

    .menu {
      position: absolute;
      z-index: 1000;

      min-width: 10rem;
      max-height: min(100vh, 300px);

      display: none;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;

      padding: 0;
      font-size: 1rem;
      color: #212529;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 0.25rem;
      overflow: auto;
    }
    .menu.open {
      display: flex;
    }
    .menu.top {
      bottom: calc(100% + 0.2rem);
    }
    .menu.bottom {
      top: calc(100% + 0.2rem);
    }
    .menu.bottom.leftAlignment,
    .menu.top.leftAlignment {
      left: 0;
    }
    .menu.bottom.rightAlignment,
    .menu.top.rightAlignment {
      right: 0;
    }
    .menu.left {
      top: 0;
      right: calc(100% + 0.2rem);
    }
    .menu.right {
      top: 0;
      left: calc(100% + 0.2rem);
    }
  `,
];
