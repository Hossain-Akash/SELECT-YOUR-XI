import React from 'react';
import navImg from '../../../assets/logo.png';
import dollar from '../../../assets/doller-img.png';

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex gap-2">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={dollar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
