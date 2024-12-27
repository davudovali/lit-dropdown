import { css } from 'lit';

export const dropdownSizeValue = css`
  .dropleft.large {
    height: 48px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  .dropleft.small {
    height: 31px;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }
`;

export const dropdownColorValue = css`
  .dropleft.primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
  }
  .dropleft.primary:hover,
  .dropleft.primary.clicked {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  .dropleft.primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  .dropleft.secondary {
    background-color: #5a6268;
    border-color: #5a6268;
    color: #fff;
  }
  .dropleft.secondary:hover,
  .dropleft.secondary.clicked {
    background-color: #545b62;
    border-color: #4e555b;
  }
  .dropleft.secondary:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }

  .dropleft.success {
    background-color: #28a745;
    border-color: #28a745;
    color: #fff;
  }
  .dropleft.success:hover,
  .dropleft.success.clicked {
    background-color: #1e7e34;
    border-color: #1c7430;
  }
  .dropleft.success:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }

  .dropleft.info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: #fff;
  }
  .dropleft.info:hover,
  .dropleft.info.clicked {
    background-color: #117a8b;
    border-color: #10707f;
  }
  .dropleft.info:focus {
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
  }

  .dropleft.warning {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #212529;
  }
  .dropleft.warning:hover,
  .dropleft.warning.clicked {
    background-color: #d39e00;
    border-color: #c69500;
  }
  .dropleft.warning:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .dropleft.danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
  }
  .dropleft.danger:hover,
  .dropleft.danger.clicked {
    background-color: #bd2130;
    border-color: #b21f2d;
  }
  .dropleft.danger:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }
`;

export const menuDirectionValue = css`
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
`;
