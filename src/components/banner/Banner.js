import React from 'react';
import './banner.css';
import Button from '../button/Button';
import { bannersubimg1, bannersubimg2 } from '../../assets/image';

function Banner() {
  return (
    <>
      <section className='banner-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col banner-container'>
            </div>
            <div className='banner-text-container col'>
              <svg className='banner-svg-one' xmlns="http://www.w3.org/2000/svg" width="81" height="88" viewBox="0 0 81 88" fill="none">
                <path d="M77.5722 3.67853L69.2896 84.6246L3.32949 36.9786L77.5722 3.67853Z" stroke="url(#paint0_linear_228_14817)" stroke-width="6" />
                <defs>
                  <linearGradient id="paint0_linear_228_14817" x1="35.0707" y1="37.147" x2="93.0096" y2="72.7824" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5CCBF5" />
                    <stop offset="1" stop-color="#C55BD6" />
                  </linearGradient>
                </defs>
              </svg>
              <span className='banner-titte-text'>Active Directory Management </span>
              <span className='banner-second-tittle'>Software at its Best</span>
              <p className='banner-p'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam ut sem nec tor</p>
              <button className="button-banner" role="button">Get Started</button>
            </div>
            <div className='banner-inner-div'>
            <img src={bannersubimg1} className="img-fluid banner-sub-img" alt="Responsive image" />
            <img src={bannersubimg2} className="img-fluid banner-sub-img-2" alt="Responsive image" />
            </div>
            <svg className='banner-bottom-svg' xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
              <path d="M6.16979 17.4303L76.0243 6.16927L87.2853 76.0238L17.4308 87.2848L6.16979 17.4303Z" stroke="url(#paint0_linear_228_14816)" stroke-width="10" />
              <defs>
                <linearGradient id="paint0_linear_228_14816" x1="30.5671" y1="41.7542" x2="93.0173" y2="80.1643" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5CCBF5" />
                  <stop offset="1" stop-color="#C55BD6" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </section>
    </>
  )
}

export default Banner;