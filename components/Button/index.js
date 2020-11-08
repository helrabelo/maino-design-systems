import React from 'react';

import styles from './button.less';

const Button = (props) => {
  const {
    children,
    onClick,
    isPrimary,
    isSecondary,
    isBig,
    isSmall,
    className,
  } = props;

  return (
    <button
      onClick={onClick}
      className={
        styles.button + ' ' + className + ' ' + isPrimary
          ? isPrimary
          : '' + isSecondary
          ? isSecondary
          : '' + isBig
          ? isBig
          : '' + isSmall
          ? isSmall
          : ''
      }
    >
      {children}
    </button>
  );
};
