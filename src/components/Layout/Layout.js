// @flow
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './Layout.module.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', { speed: 250 });
}

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='&lt;rph />' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:creator' content='@mcborreo' />
      <meta name='twitter:description' content={description} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
