import React from 'react'
import NavBar from './NavBar'
import './main.css'
import Carousel from './Carousel'
import Deals from './Deals'
import Mobile from './Mobile'
import TV from './TV'
import Home from './Home'
import Expo from './Expo'
import Explore from './Explore'
import Search from './Search'

export default function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Deals />
      <Mobile />
      <TV />
      <Home />
      <Expo />
      <Explore />
      <Search />
    </div>
  )
}
