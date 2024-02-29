import cl from 'classnames';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './index.module.scss';

const Article = (props) => {
  const { children, backUrl, className } = props;
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <div className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </div>
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  );
};

export default Article;
