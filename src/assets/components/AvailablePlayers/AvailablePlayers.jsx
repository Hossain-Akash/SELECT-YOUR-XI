import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasePlayers,
  setPurchasePlayers,
}) => {
  const playerData = use(playersPromise);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-5 ">
      {playerData.map((player) => (
        <PlayerCard
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
