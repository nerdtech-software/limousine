import React from 'react'
import Homeimage from './Homeimage'
import BookingForm from './BookingForm'
import Navbar from './Navbar'
import Carcards from './Carcards'
import MiddleContent from './MiddleContent'
import Rightvehicle from './Rightvehicle'
import Limoservice from './Limoservice'
import Whychoose from './Whychoose'
import SecondService from './SecondService'
import BeforeBooking from './BeforeBooking'
import Footer from './Footer'
import Faq from './Faq'

function Homepage() {
  return (
    <>
    <Navbar/>
    <Homeimage/>
    <BookingForm/>
    <Carcards/>
    <MiddleContent/>
    <Rightvehicle/>
    <br />
    <br />
    <Limoservice/>
    <br />
    <br />
    <Whychoose/>
    <br />
    <br />
    <SecondService/>
    <br />
    <BeforeBooking/>
    <br />
    <Faq/>
    <br />
    
    </>
  )
}

export default Homepage