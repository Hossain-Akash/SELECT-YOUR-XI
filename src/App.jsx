import './App.css';
import AvailablePlayers from './assets/components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './assets/components/SelectedPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';
import Navbar from './assets/components/Navbar/Navbar';

const fetchPlayers = async () => {
  const res = await fetch('/player.json');
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(30000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" max-w-[1200px] mx-auto flex  justify-between items-center mb-4 ">
        <h1 className="font-bold text-2xl">Available Players</h1>
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
            Selected <span>(0)</span>
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
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
