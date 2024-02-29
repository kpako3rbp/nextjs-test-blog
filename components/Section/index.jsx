import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Section = (props) => {
  const { children, className } = props;
  return <section className={cl(className, styles.section)}>{children}</section>;
};

export default Section;
