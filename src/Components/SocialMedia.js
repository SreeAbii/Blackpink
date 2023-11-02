import React from 'react'
import Footer from './Footer'
import { Box } from '@mui/material'



const SocialMedia = () => {
  
  return (
    <div><h1>PROFILE</h1>
    
    <button><a href='https://www.youtube.com/@BLACKPINK'>UTUBE</a></button>
    <button><a href='https://www.instagram.com/blackpinkofficial/'>INSTAGRAM</a></button>
    <button>
     <a href='https://twitter.com/ygofficialblink'>TWITTER</a>
    </button>
    <button><a href='https://www.facebook.com/BLACKPINKOFFICIAL'>FACEBOOK</a></button>
      <div>
      <Box>
      {/* Your Home component content */}
      <Footer /> {/* Include the Footer component */}
    </Box>

      </div>
    </div>
    
  )
}

export default SocialMedia
