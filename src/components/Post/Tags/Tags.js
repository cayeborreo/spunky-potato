// @flow
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import ThemeContext from '../../../context/theme-context';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles['tags']}>
      <ul className={styles['tags__list']}>
        {tagSlugs
          && tagSlugs.map((slug, i) => (
            <li className={styles['tags__list-item']} key={tags[i]}>
              <Link
                to={slug}
                className={
                  styles[`tags__list-item-link${isDark ? '--dark' : ''}`]
                }
              >
                {tags[i]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tags;
