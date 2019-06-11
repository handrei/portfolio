import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='experience'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Experience</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Freelancer</h3>
              <div className='subheading mb-3'>self-employed</div>
              <p>Worked on yii2 & wordpress</p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Oct 2017 - Present</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>JavaScript fullstack developer</h3>
              <div className='subheading mb-3'>Evozon</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>May 2017 - October 2017</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Web Developer</h3>
              <div className='subheading mb-3'>Softvision</div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2015 - May 2017</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
