// @flow
import React from 'react';
import moment from 'moment';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  date: string
};

const Content = ({ body, title, date }: Props) => (
  <div className={styles['content']}>
    <h1 className='content__title'>{title}</h1>
    <p className={styles['content__date']}>
      <span style={{ fontStyle: 'normal' }}>📌 </span>Published{' '}
      {moment(date).format('MMMM DD, YYYY')}
    </p>
    <div
      className={styles['content__body']}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
