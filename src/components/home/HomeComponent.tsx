import React from 'react'
import Base from '../core/Base'
import Paralax from '../_shared/Paralax'

function HomeComponent() {
  return (
    <Base>
      <section className='parallax-wrapper'>
        <Paralax baseVelocity={-5}><p>HI</p> <p style={{ color: '#80489C' }}>Everyone</p></Paralax>
        <Paralax baseVelocity={5}><p>My Name</p> <p style={{ color: '#3E6D9C' }}>Gusna</p></Paralax>
      </section>
    </Base>
  )
}

export default HomeComponent
