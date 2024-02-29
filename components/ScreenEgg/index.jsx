import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const ScreenEgg = (props) => {
  const { className, children, type } = props;
  return (
    <div className={cl(className, styles.screenEgg, type === 'right' ? styles.screenEggRight : styles.screenEggLeft)}>
      {children}
    </div>
  );
};

export default ScreenEgg;
