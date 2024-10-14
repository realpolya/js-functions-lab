import './App.css'
import { useState } from 'react';
import AllFighters from './AllFighters/AllFighters.jsx';
import FighterCard from './AllFighters/FighterCard/FighterCard.jsx';
import Money from './Money/Money.jsx';


function App() {

  // useState
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [fighters, setFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  // functions
  const addFighter = fighter => {
    
    // check balance
    const balanceEnough = money > fighter.price ? true : false;
    
    // check for balance
    if (!balanceEnough) {
      return console.log('Not enough money');
    } 
    
    // add a fighter
    console.log('fighter is ', fighter)
    setTeam([...team, fighter]);

    // subtract from balance
    setMoney(money - fighter.price);

  }

  // return
  return (
    <>
      <div className='main-page'>

        <h1>Zombies in Reactville!</h1>

        < Money money={money}/>

        <AllFighters fighters={fighters} addFighter={addFighter} />

      </div>
    </>
  );

}

export default App
