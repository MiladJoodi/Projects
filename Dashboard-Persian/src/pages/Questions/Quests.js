import React, { useState } from 'react';
import data from  './data'
import Quest from './Quest'
import './Quests.css'

// + or - icons
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Quests = () => {

  const [infos, setInfos] = useState(data)

  return (
    <main className='questionContainer'>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {infos.map(info=> (
          <Quest key={info.id} {...info} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Quests;
