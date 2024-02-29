import cl from 'classnames';
import React from 'react';

import ScreenEgg from '@/components/ScreenEgg';

import styles from './index.module.scss';

const BuyMeCoffee = (props) => {
  const { className } = props;
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a href="https://google.com" target="_blank" className={styles.buyCoffeeButton}>
          Buy me a coffee
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
