import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='skills'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Skills</h2>

          <div className='subheading mb-3'>
            Programming Languages &amp; Tools
          </div>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <i className='fab fa-html5' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-css3-alt' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-js-square' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-react' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-node-js' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-wordpress' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-npm' />
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-laravel' />
            </li>
          </ul>

          <div className='subheading mb-3'>Workflow</div>
          <ul className='fa-ul mb-0'>
            <li>
              <i className='fa-li fa fa-check' />
              Responsive Design
            </li>
            <li>
              <i className='fa-li fa fa-check' />
              Cross Browser Testing &amp; Debugging
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
