import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        MISSION & VISION
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our mission is to help enterprises accelerate adoption of new technologies,
         untangle complex issues that always emerge during digital evolution, and orchestrate 
         ongoing innovation. Whether it is a consumer-oriented app or a transformative 
         enterprise-class solution, the company leads the process from ideation and concept 
         to delivery, and provides ongoing support through its IS360 framework.


        </p>

        <Button styles='mt-10'/>
      </div>
      
    </section>
  )
}

export default Business
