// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import Scroll from '../Scroll';
import Copyright from '../Sidebar/Copyright/Copyright';
import styles from './Post.module.scss';
import { useSiteMetadata } from '../../hooks';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { copyright } = useSiteMetadata();

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to='/'>
        ← Home
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} date={date} />
      </div>

      <div className={styles['post__footer']}>
        {/* <Meta date={date} /> */}
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Scroll />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>

      {/* <Copyright copyright={copyright} /> */}
    </div>
  );
};

export default Post;
