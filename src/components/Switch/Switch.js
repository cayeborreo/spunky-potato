import React from 'react';
import styles from './Switch.module.scss';

const Switch = ({ value, toggle, label }) => {
  console.log('From Switch', value);
  return (
    <div className={styles['switch']}>
      <input
        type='checkbox'
        id='switch'
        checked={value}
        onChange={toggle}
        label={label}
      />
      <label className={styles['switch__label']} htmlFor='switch'></label>
    </div>
  );
};

export default Switch;
