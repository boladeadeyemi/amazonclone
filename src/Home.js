import React from 'react'
import "./Home.css"
import Product from './Product'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
          <Link to = '/'>
            <img className= "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="prime video banner" />
          </Link>
            

            <div className="home__row">
              <Product
              id= "12321341"
              title= "The lean start"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
              />
              <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater,  Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating= {4}
              image= "https://m.media-amazon.com/images/I/61wzXuHCb1L._AC_UY327_FMwebp_QL65_.jpg"
              />
            </div>
            <div className="home__row">
              <Product  
              id="4903850"
              title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price = {199.99}
              rating = {3}
              image="https://m.media-amazon.com/images/I/81dcBdBw3+L._AC_UY327_FMwebp_QL65_.jpg"
             />
              <Product 
              id = "34546577"
              title= "SAMSUNG Galaxy Watch Pro 5 45mm LTE Smartwatch w/ Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, GPS Route Tracking, Titanium Frame, US Version, Black"
              price = {299}
              rating = {4}
              image="https://m.media-amazon.com/images/I/61Sl+xoVHoL._AC_UY327_FMwebp_QL65_.jpg"
              />

              <Product 
              title= "SAMSUNG Galaxy S23 Leather Phone Case, Premium Protective Cover w/Front and Back Protection, Soft Grip, US Version"
              price = {49}
              rating = {5}
              image="https://m.media-amazon.com/images/I/615U+TaSqOL._AC_UL600_FMwebp_QL65_.jpg"/>
            </div>
            <div className="home__row">
              <Product 
              title= "Midea MRC04M3AWW, White 3.5 cu. ft. Mini Freezer, Cubic Feet"
              price = {249}
              rating = {5}
              image="https://m.media-amazon.com/images/I/51Nf+0w-zkL._AC_SX679_.jpg"
              />
            </div>
        </div>
    </div>
  )
}

export default Home