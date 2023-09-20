import React, { useState } from 'react';
import makesData from '../../json/makes.json';
import css from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [haveText, setHaveText] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleText = ev => {
    setHaveText(ev.currentTarget.textContent);
  };

  const itemList = makesData.map(item => (
    <div
      onClick={handleText}
      className={css.dropdownItem}
      key={item.toString()}
    >
      {item}
    </div>
  ));

  return (
    <div
      className={isOpen ? css.dropdown + ' ' + css.active : css.dropdown}
      onClick={handleClick}
    >
      <div className={css.dropdownText}>
        {!haveText ? 'Choose model' : haveText}
      </div>
      <div className={css.dropdownItems}>{itemList}</div>
    </div>
  );
};

export default Sidebar;
