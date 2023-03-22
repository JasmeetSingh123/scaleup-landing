import React from 'react'
import { card, webdev } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Web developement
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        web development services across multiple platforms integrating complex features and 
        functionality into your websites. We take a client and or user-based approach to developing
         websites.
        </p>


      </div>

      <div className={layout.sectionImg}>
        <img src={webdev} alt='card' className='w-[100%] h[100%]'/>
      </div>
      
    </section>
  )
}

export default CardDeal
