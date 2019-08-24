// @flow
import React, { useContext } from 'react';
import Author from './Author';
import Menu from './Menu';
import Contacts from './Contacts';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import ThemeContext from '../../context/theme-context';

type Props = {
  isIndex?: boolean,
  isDark?: boolean
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, menu } = useSiteMetadata();
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={styles['sidebar']}>
      <div className={styles[`sidebar__inner${isDark ? '--dark' : ''}`]}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />

        <Contacts contacts={author.contacts} />
      </div>
    </div>
  );
};

export default Sidebar;
