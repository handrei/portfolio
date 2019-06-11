import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='interests'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Portfolio</h2>
          <iframe
            title='devconnector'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/cna1pUCoYGY'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
          <hr />
          <iframe
            title='shopping app'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/5GmKOphrhBk'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
          <hr />
          <iframe
            title='tracalorie'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/1wGyg2CKS5E'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </div>
      </section>
    );
  }
}
