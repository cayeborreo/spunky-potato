import React from 'react';
import { Link } from 'gatsby';

import styles from './Scroll.module.scss';

const Scroll = () => (
  <div className={styles.scroll}>
    <Link className={styles['scroll__button-home']} to='/'>
      ← Home
    </Link>

    <a
      className={styles['scroll__button-back-to-top']}
      href='#top'
      rel='noopener'
    >
      ↑ Back to top
    </a>
  </div>
);

export default Scroll;
