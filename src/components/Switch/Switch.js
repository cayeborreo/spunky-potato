import React from 'react';
import styles from './Switch.module.scss';

const Switch = ({ value, toggle }) => (
  <div className={styles['switch']}>
    <input type='checkbox' id='switch' checked={value} onChange={toggle} />
    <label className={styles['switch__label']} htmlFor='switch'></label>
  </div>
);

export default Switch;
