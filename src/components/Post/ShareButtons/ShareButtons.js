import React from 'react';
import classNames from 'classnames';
import styles from '../../Sidebar/Contacts/Contacts.module.scss';
import { getIcon } from '../../../utils';
import Icon from '../../Icon';

const ShareButtons = ({ slug, title }) => {
  const url = `https://cayeborreo.com${slug}`;
  const encodedURL = encodeURI(url);

  const tweetContent = `${title} by @mcborreo`;
  const encodedTweet = encodeURI(tweetContent);

  return (
    <div className={styles['share-buttons']}>
      <div
        style={{ fontWeight: 'bold', float: 'left', margin: '.5rem 1rem 0 0' }}
      >
        Share this article:
      </div>
      <div className={styles['contacts']}>
        <ul className={styles['contacts__list']}>
          <li className={styles['contacts__list-item']}>
            <div
              className='fb-share-button'
              data-href={url}
              data-layout='button'
              data-size='large'
            >
              <a
                className={styles['contacts__list-item-link']}
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&amp;src=sdkpreparse`}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Icon icon={getIcon('facebook')} />
              </a>
            </div>
          </li>

          <li className={styles['contacts__list-item']}>
            <a
              className={classNames(
                styles['contacts__list-item-link'],
                'twitter-share-button'
              )}
              href={`https://twitter.com/intent/tweet?text=${encodedTweet}%20${encodedURL}`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Icon icon={getIcon('twitter')} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareButtons;
