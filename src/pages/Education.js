import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='education'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Education</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Informal school of IT</h3>
              <div className='subheading mb-3'>
                Fullstack product development
              </div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'> 2017 - 2017</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Informal school of IT</h3>
              <div className='subheading mb-3'>
                Server-side javascript with node.js
              </div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'> 2016 - 2016</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Informal school of IT</h3>
              <div className='subheading mb-3'>Web development</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'> 2015 - 2015</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>University of Babeș-Bolyai</h3>
              <div className='subheading mb-3'>Computer Science</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'> 2011 - 2014</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Colegiul National "Silvania" High School</h3>
              <div className='subheading mb-3'>computer science & maths</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>2007 - 2011</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
