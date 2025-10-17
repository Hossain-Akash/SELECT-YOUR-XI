import React, { useState } from 'react';
import userImg from '../../../assets/icon.png';
import flagImg from '../../../assets/flag.png';

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split(',').join('').split('$').join('')
    );
    if (availableBalance < playerPrice) {
      alert('Not Enough Coin!!');
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
  };
  return (
    <div className="card bg-base-100  shadow-lg p-4 ">
      <figure>
        <img
          className="rounded-[10px] w-full h-[300px]  "
          src={player['player_image']}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4 border-b-1 border-gray-300 pb-3">
        <div className="flex gap-3 items-center">
          <img className="w-[20px] h-[20px]" src={userImg} alt="" />
          <h2 className="card-title">{player['player_name']}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-[15px] h-[15px]" src={flagImg} alt="" />
            <span>{player['player_country']}</span>
          </div>
          <button className="btn">{player['playing_role']}</button>
        </div>
      </div>
      <div className="flex justify-between font-bold mt-4">
        <span>Rating</span>
        <span>{player.rating}</span>
      </div>
      <div className="flex justify-between mt-4">
        <span className="font-bold">{player['batting_style']}</span>
        <span>{player['bowling_style']}</span>
      </div>

      <div className="card-actions mt-4 flex justify-between items-center ">
        <p className="font-bold">Price: ${player.price}</p>
        <button
          disabled={isSelected}
          onClick={() => handleSelect(player)}
          className="btn  "
        >
          {isSelected === true ? 'Selected' : 'Choose Player'}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
