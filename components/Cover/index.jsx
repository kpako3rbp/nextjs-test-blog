import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const Cover = (props) => {
  const { className, title } = props;
  return (
    <div className={cl(className, styles.cover)}>
      <h1 className={styles.coverTitle} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default Cover;
