import React, { useState } from 'react';
import './UserMenu.module.css'; 

import MenuContainer from '../MenuContainer/MenuContainer';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link to="#" onClick={handleClick} className="avatar-link">
        <div className="avatar">
       
        </div>
      </Link>
      <MenuContainer anchorEl={anchorEl} onCloseMenu={handleClose} />
    </>
  );
};

export default UserMenu;
