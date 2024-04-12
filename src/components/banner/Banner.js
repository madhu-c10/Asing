import React from 'react';
import './banner.css';
import Button from '../button/Button';

function Banner() {
  return (
    <>
      <section>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col banner-container'>
                </div>
                <div className='banner-text-container col'>
                    <span className='banner-titte-text'>Active Directory Management </span>
                    <span className='banner-second-tittle'>Software at its Best</span>
                    <p className='banner-p'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Nullam ut sem nec tor</p>
                    <button className="button-banner" role="button">Start Free Trial</button>
                </div>
                <div className='banner-inner-div'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Banner;