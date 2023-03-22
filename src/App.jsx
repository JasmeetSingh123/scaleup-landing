import React from 'react'
import styles from './style'
import {Navbar,Hero,Billing,Business,CTA,CardDeal,Clients,Footer,Stats, Testimonials} from './components'
import { itcon, outsource } from './assets'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing img={itcon} title='IT management' desc= 'We offer comprehensive tech expertise and enterprise IT support. Our software development services include strategy consulting, CX design, engineering, and lifecycle management of custom products, as well as system integration' />
          <CardDeal/>
          <Billing img={outsource} title='Outsource' desc='custom software development outsourced product development verification and validation application development and maintenance' />
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}

export default App
