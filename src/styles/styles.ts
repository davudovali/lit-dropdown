import { css } from 'lit';

export const sizeStyles = css`
  .large {
    min-height: 48px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }
  .small {
    min-height: 31px;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }
`;

export const widthStyles = css`
  .w-100 {
    width: 100%;
  }
  .w-75 {
    width: 75%;
  }
  .w-50 {
    width: 50%;
  }
  .w-25 {
    width: 25%;
  }
`;

export const colorStyles = css`
  .light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  .light:hover,
  .light.clicked {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
  .light:focus,
  .light:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  .primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
  }
  .primary:hover,
  .primary.clicked {
    background-color: #0069d9;
    border-color: #0062cc;
  }
  .primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }

  .secondary {
    background-color: #5a6268;
    border-color: #5a6268;
    color: #fff;
  }
  .secondary:hover,
  .secondary.clicked {
    background-color: #545b62;
    border-color: #4e555b;
  }
  .secondary:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }

  .success {
    background-color: #28a745;
    border-color: #28a745;
    color: #fff;
  }
  .success:hover,
  .success.clicked {
    background-color: #1e7e34;
    border-color: #1c7430;
  }
  .success:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }

  .info {
    background-color: #17a2b8;
    border-color: #17a2b8;
    color: #fff;
  }
  .info:hover,
  .info.clicked {
    background-color: #117a8b;
    border-color: #10707f;
  }
  .info:focus {
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
  }

  .warning {
    background-color: #ffc107;
    border-color: #ffc107;
    color: #212529;
  }
  .warning:hover,
  .warning.clicked {
    background-color: #d39e00;
    border-color: #c69500;
  }
  .warning:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }

  .danger {
    background-color: #dc3545;
    border-color: #dc3545;
    color: #fff;
  }
  .danger:hover,
  .danger.clicked {
    background-color: #bd2130;
    border-color: #b21f2d;
  }
  .danger:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }
`;
