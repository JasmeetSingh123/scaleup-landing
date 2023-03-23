import React from 'react'
import { logo, scaleup } from '../assets'
import { footerLinks } from '../constants'
import styles from '../style'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY } flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={scaleup} alt='scaleup' className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Contact:
            +91-7620733998 <br></br>
              {"       "}+1-(502)501-1428
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                
              {footerLink.title}
              </h4>

              <ul>
                {footerLink.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                    {link.name}
                  </li>

                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  )
}

export default Footer
