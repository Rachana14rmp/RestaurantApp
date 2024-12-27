import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container"><div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious is about good food</p>
            </div>
            <p className='mid'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore explicabo quasi, optio amet minus temporibus ullam, nostrum quidem saepe unde esse praesentium recusandae consectetur tempora excepturi. Ipsa, eos porro.</p>
            <Link tp={"/"}>Explore Menu<span>
                <HiOutlineArrowNarrowRight/>
                </span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
            </div>
    </section>
  )
}

export default About