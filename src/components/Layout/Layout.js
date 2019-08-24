// @flow
import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';

import styles from './Layout.module.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', { speed: 250 });
}

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  featuredImage?: string
};

const Layout = ({
 children, title, description, featuredImage 
}: Props) => {
  const cardImage = `${
    process.env.GATSBY_FEATURED_IMAGES_FOLDER_URL
  }${featuredImage || 'about/hello.jpg'}`;
  const cardType = featuredImage ? 'summary_large_image' : 'summary';
  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='googlebot' content='all' />
        <meta name='twitterbot' content='noarchive' />
        <meta name='description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta name='twitter:card' content={cardType} />
        <meta name='twitter:site' content='&lt;rph />' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:creator' content='@mcborreo' />
        <meta name='twitter:description' content={description} />
        <meta name='og:image' content={cardImage} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
