  import React from 'react'
  // import Initialheader from '../../../Jenil/Components/Initialheader'
  import Programms from '../../../Jenil/Components/Programms'
  import Footer from '../../../Samarth/Components/Footer'

  const page = () => {
    return (
      <div className=" h-fit flex flex-col overflow-x-hidden overflow-y-hidden">
        {/* <Initialheader /> */}
        <Programms/>
        <Footer/>
      </div>
    )
  }

  export default page
