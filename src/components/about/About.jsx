import React from 'react'
import "./About.css"
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section  id='about'> 
      <h5> Ge to know</h5>
      <h2> About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={ME} alt="About Imag" />
          </div>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5> Experience </h5>
            <small>  3+ Years Working   </small>
          </article>
          <article className='about__card'>
            <FiUser className='about__icon'/>
            <h5> Clientes </h5>
            <small>  200+ Worldwide   </small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5> Projects </h5>
            <small>  88+ completed   </small>
          </article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati alias et unde cumque dolore maiores fuga dignissimos veritatis laborum laudantium voluptatem, ea numquam minima quod adipisci eum, praesentium ipsa iste?
          </p>
          <a href='#contact' className='btn btn-primary'> Lets Talks</a>
        </div>
      </div> 
    </section>
  )
}

export default About