import React from 'react'
import styles, { layout } from '../style'
import { apple,bill,google, outsource } from '../assets'

const Billing = (props) => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={props.img} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
      </div>

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient'/>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        {props.title}
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {props.desc}
        </p>
      </div>



      
    </section>
  )
}

export default Billing
