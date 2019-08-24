// @flow
import React, { useContext } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ThemeContext from '../../../context/theme-context';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  }
};

const Author = ({ author }: Props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles['author']}>
      <Link to='/'>
        <StaticQuery
          query={graphql`
            query {
              heroImg: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                  fixed(quality: 100, width: 125) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          `}
          render={({ heroImg }) => (
            <Img
              fixed={heroImg.childImageSharp.fixed}
              alt="Hi, I'm Caye."
              className={styles['author__photo']}
            />
          )}
        />
      </Link>

      <h1 className={styles['author__title']}>
        <Link className='author__title-link' to='/'>
          &lt;rph />
        </Link>
      </h1>
      <p className={styles['author__subtitle']}>{author.bio}</p>
    </div>
  );
};

export default Author;
