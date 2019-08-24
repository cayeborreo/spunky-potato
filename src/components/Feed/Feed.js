// @flow
import React, { useContext } from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';
import ThemeContext from '../../context/theme-context';

type Props = {
  edges: Edges,
  isDark?: boolean
};

const Feed = ({ edges }: Props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            {!!edge.node.frontmatter.category && (
              <>
                <span
                  className={
                    styles[`feed__item-meta-category${isDark ? '--dark' : ''}`]
                  }
                >
                  <Link to={edge.node.fields.categorySlug}>
                    {edge.node.frontmatter.category}
                  </Link>
                </span>
              </>
            )}
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link
              className={
                styles[`feed__item-title-link${isDark ? '--dark' : ''}`]
              }
              to={edge.node.fields.slug}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles['feed__item-description']}>
            {edge.node.frontmatter.description}{' '}
            {/* <Link
            className={styles['feed__item-readmore']}
            to={edge.node.fields.slug}
          >
            Read →
          </Link> */}
            <br />
            <time
              className={styles['feed__item-meta-time']}
              dateTime={moment(edge.node.frontmatter.date).format(
                'MMMM D, YYYY'
              )}
            >
              {moment(edge.node.frontmatter.date).format('MMM DD')}
            </time>
            <span className={styles['feed__item-meta-duration']}>
              ☕ {edge.node.timeToRead} min read
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
