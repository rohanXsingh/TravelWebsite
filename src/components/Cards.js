import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './HeroSection.css';


function Cards() {
  return (
    <div className='cards'>
     

      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dYaayrdAmWTtEBOHfIISSiUxASab8Jd4_A&usqp=CAU'
              text='Be spiritiual in Haridawar and Rishikesh. '
              label='Religious'
              path='/services'
              alt = "NoServiceimg-0"
              
            />
            <CardItem
              src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'
              text='Lets do the off road in 4X4 vehicle'
              label='OFF Roading'
              path='/services'
              alt = "NoServiceim-1"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://rare-gallery.com/uploads/posts/530565-wallpaper-forest.jpg'
              text='The amaze and jaw dropping valleys'
              label='Mystery Valleys'
              path='/services'
              alt = "NoService-2"
            />
            <CardItem
              src='https://wallpapercave.com/wp/wp2216444.jpg'
              text='The mysterious caves in Meghalays'
              label='Caves'
              path='/products'
              alt = "NoServiceProduct-1"
            />
            <CardItem
              src='https://wallpaperaccess.com/full/1431610.jpg'
              text='Trekk through Jungle and reach to the peak for the amazign view'
              label='Trekking'
              path='/sign-up'
              alt = "NoSignupImg"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;