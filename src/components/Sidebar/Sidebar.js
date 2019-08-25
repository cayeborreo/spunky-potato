// @flow
import React from 'react';
import Author from './Author';
import Menu from './Menu';
import Contacts from './Contacts';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
  isDark?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className='sidebar__inner'>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />

        <Contacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export default Sidebar;
