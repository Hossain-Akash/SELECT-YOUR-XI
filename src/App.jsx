import './App.css';
import AvailablePlayers from './assets/components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './assets/components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';
import Navbar from './assets/components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/player.json');
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000);
  const [purchasePlayers, setPurchasePlayers] = useState([]);

  const removePlayer = (p) => {
    const filterPlayer = purchasePlayers.filter(
      (player) => player.player_name != p.player_name
    );
    setPurchasePlayers(filterPlayer);
    setAvailableBalance(
      availableBalance + parseInt(p.price.split(',').join(''))
    );
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" max-w-[1200px] mx-auto flex  justify-between items-center mb-4 ">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? 'Available Players'
            : `Selected Players(${purchasePlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-5 border-2 border-gray-400 rounded-l-xl border-r-0 ${
              toggle === true ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-5 border-2 border-gray-400 rounded-r-xl border-l-0 ${
              toggle === false ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Selected <span>({purchasePlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-dots loading-xl flex max-w-[1200px] mx-auto  items-center"></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasePlayers={purchasePlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
