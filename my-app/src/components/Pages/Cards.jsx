import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Still Confused?</h1>
      <h2>Let's Ask Someone!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/videos/pic1.jpg'
              text='Talk to Others'
              label='Forum'
              // path=
            />
            <CardItem
              src='/videos/robot.jpg'
              text='Ask Chatbot'
              label='Chatbot'
              // path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;