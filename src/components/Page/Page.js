import React, { useRef, useEffect, useContext } from 'react';
import styles from './Page.module.scss';
import ThemeContext from '../../context/theme-context';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  const { isDark } = useContext(ThemeContext);

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        {title && (
          <h1 className={styles[`page__title${isDark ? '--dark' : ''}`]}>
            {title}
          </h1>
        )}
        <div className={styles['page__body']}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
