import React from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Intro from '../components/Intro'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/footer'

const HomePage = () => {
  const location = useLocation()
  return (
    <div>
      <Header />
      {location.pathname !== '/' ?
        (<div className='w-[100%] h-32 bg-[#eaded7] relative bottom-[3.5rem]'>
          {<h2>Home {location.pathname}</h2>}
        </div>):
       (<>
          <Hero/>
          <FeaturedProducts/>
          <Intro/>
          <NewsLetter/>
       </>
       )
      }
      <Outlet />
    </div>
  )
}

export default HomePage