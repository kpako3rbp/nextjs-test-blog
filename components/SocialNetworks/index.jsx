import cl from 'classnames';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

import ScreenEgg from '@/components/ScreenEgg';

import styles from './index.module.scss';

const socilaNetworks = [
  {
    id: 1,
    href: 'https://google.com',
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: 'https://google.com',
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: 'https://google.com',
    icon: AiFillTwitterCircle,
  },
  {
    id: 4,
    href: 'https://google.com',
    icon: AiFillLinkedin,
  },
];

const SocialNetworks = (props) => {
  const { className } = props;
  return (
    <ScreenEgg>
      <ul className={cl(styles.list, className)}>
        {socilaNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id} className={styles.listItem}>
            <a href={socialNetwork.href} target="_blank" className={styles.listLink}>
              {React.createElement(socialNetwork.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
