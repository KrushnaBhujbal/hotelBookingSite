import React from 'react'
import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Propertylist from '../../components/propertyList/Propertylist'
import FeaturedProp from '../../components/featuredProp/FeaturedProp'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <Propertylist />
        <h1 className='homeTitle'>Home guests love</h1>
        <FeaturedProp />
        <MailList />
        <Footer />
        </div>
    </div>
  )
}

export default Home