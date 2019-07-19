// @flow
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <span className={styles['feed__item-meta-category']}>
            <Link
              to={edge.node.fields.categorySlug}
              className={styles['feed__item-meta-category-link']}
            >
              {edge.node.frontmatter.category}
            </Link>
          </span>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-duration']}>
            ☕ {Math.ceil(edge.node.wordCount.words / 150)} min read
          </span>
          <span className={styles['feed__item-meta-divider']} />
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link
            className={styles['feed__item-title-link']}
            to={edge.node.fields.slug}
          >
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <p className={styles['feed__item-description']}>
          {edge.node.frontmatter.description}{' '}
          <time
            className={styles['feed__item-meta-time']}
            dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
          >
            {moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
          </time>
        </p>
        <Link
          className={styles['feed__item-readmore']}
          to={edge.node.fields.slug}
        >
          Read →
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
