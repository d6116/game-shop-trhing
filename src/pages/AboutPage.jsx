import React from 'react'
import Title from '../componments/Title'
import SocialLinks from '../componments/SocialLinks'

const AboutPage = () => {
  return (
    <main className='about-page'>
      <section className='about-left'>
        <Title>Shaw!</Title>
        <h2>About Random API Games</h2><br />
        <p>This is a webpage for finding new games to play for free. Go play in the vast selection of games we have here and enjoy!
        </p>
        <br></br>
        <SocialLinks/>

      </section>

      <section className='about-right'>
        <img alt="squished" src="https://res.cloudinary.com/arikxl/image/upload/v1764006987/Ella2023/kcdwiaudxcorvkralqng.jpg" />
      </section>
    </main>
  )
}

export default AboutPage
