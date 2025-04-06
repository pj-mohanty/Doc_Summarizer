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
              text='Discussion Forum'
              label='Forum'
              path='/PaperList'
            />
            <CardItem
              src='/videos/robot.jpg'
              text='Chatbot'
              label='Chatbot'
              path='http://localhost:8501'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;