import React from 'react'
import BeforeBooking from './BeforeBooking'
import BookingForm from './BookingForm'
import Carcards from './Carcards'
import Faq from './Faq'
import Homeimage from './Homeimage'
import Limoservice from './Limoservice'
import MiddleContent from './MiddleContent'
import Rightvehicle from './Rightvehicle'
import SecondService from './SecondService'
import Whychoose from './Whychoose'

function Homepage() {
  return (
    <>

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