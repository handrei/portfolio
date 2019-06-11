import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='about'
      >
        <div className='w-100'>
          <h1 className='mb-0'>
            Andrei
            <span className='text-primary'>HOSU</span>
          </h1>
          <div className='subheading mb-5'>
            Cluj-Napoca
            <a href='mailto:h.andrei92@gmail.com'>h.andrei92@gmail.com</a>
          </div>
          <p className='lead mb-5'>
            Fullstack Web developer, in the last 3 years, accumulated experience
            working with php(5.6, 7), using frameworks (yii 1, yii 2, laravel),
            JavaScript(react, node.js) , MySql, Html 5, Css 3, and Wordpress
            developing and maintaining several web applications
          </p>
          <div className='social-icons'>
            <a
              href='https://www.linkedin.com/in/andrei-hosu-701349162/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in' />
            </a>
            <a
              href='https://github.com/handrei'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github' />
            </a>
            <a
              href='https://www.facebook.com/musicuvant'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
