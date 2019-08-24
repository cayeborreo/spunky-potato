import React from 'react';

const Switch = ({ value, toggle }) => (
  <div className='switch'>
    <input type='checkbox' id='switch' checked={value} onChange={toggle} />
    <label className='switch__label' htmlFor='switch'></label>
  </div>
);

export default Switch;
