import cl from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Title } from '@/components';
import { urlFor } from '@/lib/client';

import styles from './index.module.scss';

const Post = (props) => {
  const { className, image, title, description, slug } = props;
  return (
    <Link href={`post/${encodeURIComponent(slug.current)}`} className={cl(className, styles.post)}>
      <div className={styles.postLink}>
        <Title type="small" className={styles.postTitle}>
          {title}
        </Title>
        <div className={styles.postContent}>
          <div>
            <Image src={urlFor(image).url()} alt={image.caption} width="100" height="100"></Image>
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
