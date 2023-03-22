import React from 'react'
import styles from '../style'

const Button = () => {
  return (
    <button  type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none ${styles}`}>
      <a href='#features'>  Services </a>
      
    </button>
  )
}

export default Button
