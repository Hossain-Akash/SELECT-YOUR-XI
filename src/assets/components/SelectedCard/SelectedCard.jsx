import React from 'react';
import DeleteImg from '../../../assets/dustbin.png';

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="flex justify-between items-center border-2 border-gray-300 p-3 shadow-xl rounded-xl mb-3">
      <div className="flex items-center gap-4">
        <img
          className="w=[100px] h-[100px] rounded-xl"
          src={player.player_image}
          alt=""
        />
        <div className="">
          <h1 className="font-bold text-xl mb-4">{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <img onClick={handleRemove} src={DeleteImg} alt="" />
    </div>
  );
};

export default SelectedCard;
