import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Button = (props) => {
  const { className, children, onClick, disabled } = props;
  return (
    <button disabled={disabled} onClick={onClick} className={cl(className, styles.button)}>
      {children}
    </button>
  );
};

export default Button;
