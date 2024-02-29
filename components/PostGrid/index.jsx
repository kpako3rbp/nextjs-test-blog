import cl from 'classnames';
import React from 'react';

import styles from './index.module.scss';

const PostGrid = (props) => {
  const { className, children } = props;
  return <div className={cl(className, styles.postGrid)}>{children}</div>;
};

export default PostGrid;
