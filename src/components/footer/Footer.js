import React from 'react';
import './footer.css';
import { footerlogo } from '../../assets/image';

function Footer() {
    return (
        <>
            <svg className='footer-svg' xmlns="http://www.w3.org/2000/svg" width="1440" height="29" viewBox="0 0 1440 29" fill="none">
                <path d="M-0.147461 28.9571L1441 0V28.9571H-0.147461Z" fill="#2AB8D5" />
            </svg>
            <footer className='footer-con'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <span className='footer-keep-text'>Keep Exploring</span><br />
                            <div className='footer-keep-text-links-div'>
                                <span className='footer-1-links link-1'>Features</span>
                                <span className='footer-1-links'>Blogs</span>
                            </div>
                            <div className='footer-keep-text-links-div'>
                                <span className='footer-1-links link-1'>Pricing</span>
                                <span className='footer-1-links'>About us</span>
                            </div>
                            <div className='footer-keep-text-links-div'>
                                <span className='footer-1-links link-1'>Download</span>
                                <span className='footer-1-links'>Contact us</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <span className='footer-keep-text'>Contact Us</span><br />
                            <div className='footer-keep-text-links-div'>
                                <div className='footer-con-imag'></div>
                                <span className='footer-1-links'>sales@admsoftware.com,
                                    <br />
                                    <span className='footer-1-links'>support@admsoftware.com</span>
                                </span>

                            </div>
                            <div className='footer-keep-text-links-div'>
                                <div className='footer-con-imag-phone'></div>
                                <span className='footer-1-links'>sales@admsoftware.com,
                                    <br />
                                    <span className='footer-1-links'>support@admsoftware.com</span>
                                </span>

                            </div>
                            <div className='footer-keep-text-links-div'>
                                <div className='footer-con-imag-location'></div>
                                <span className='footer-1-links'>sales@admsoftware.com,
                                    <br />
                                    <span className='footer-1-links'>support@admsoftware.com</span>
                                </span>

                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='footer-logo-div'>
                            <img src={footerlogo} alt="..." class="img-thumbnail footer-img"/>
                            </div>
                            <div className='footer-social-icons-div'>
                                <div className='footer-social-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                                        <path d="M5.17843 15.375H2.3757V8.49235H0.0341797V5.79605H2.3757V3.80931C2.3757 2.67403 2.695 1.79891 3.33359 1.18397C3.97219 0.569022 4.82365 0.26155 5.88798 0.26155C6.73944 0.26155 7.43717 0.297028 7.98116 0.367983V2.74498L6.52658 2.78046C6.00624 2.78046 5.65146 2.88689 5.46225 3.09976C5.27304 3.31262 5.17843 3.63192 5.17843 4.05765V5.79605H7.87473L7.51995 8.49235H5.17843V15.375Z" fill="#22577A" />
                                    </svg>
                                </div>
                                <div className='footer-social-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                        <path d="M14.1201 3.73091C14.1201 3.87282 14.1201 4.0029 14.1201 4.12116C14.1201 5.18549 13.925 6.23208 13.5348 7.26093C13.1445 8.28978 12.5887 9.22993 11.8673 10.0814C11.1459 10.9329 10.2117 11.6247 9.06459 12.1568C7.91748 12.689 6.65802 12.9551 5.28622 12.9551C3.55965 12.9551 1.97498 12.4939 0.532227 11.5715C0.768744 11.5951 1.01709 11.6069 1.27726 11.6069C2.72001 11.6069 4.00903 11.1694 5.14431 10.2943C4.45841 10.2706 3.84938 10.0577 3.31722 9.65566C2.78505 9.25358 2.42436 8.74507 2.23515 8.13013C2.42436 8.17743 2.61358 8.20108 2.80279 8.20108C3.08661 8.20108 3.35861 8.15378 3.61878 8.05917C2.90922 7.91726 2.31793 7.56249 1.8449 6.99484C1.37186 6.4272 1.13535 5.77678 1.13535 5.04358C1.13535 5.01993 1.13535 5.0081 1.13535 5.0081C1.58473 5.24462 2.05776 5.3747 2.55445 5.39835C1.63203 4.75976 1.17082 3.89647 1.17082 2.80849C1.17082 2.24085 1.31273 1.72051 1.59655 1.24748C2.37706 2.19354 3.31722 2.9504 4.41702 3.51804C5.51683 4.08568 6.70533 4.40498 7.98252 4.47594C7.93522 4.23942 7.91156 4.0029 7.91156 3.76638C7.91156 2.91492 8.21312 2.18763 8.81624 1.58451C9.41936 0.981394 10.1467 0.679834 10.9981 0.679834C11.8969 0.679834 12.6537 0.999133 13.2687 1.63773C13.9782 1.49582 14.6405 1.24748 15.2554 0.8927C15.0189 1.6259 14.5577 2.19354 13.8718 2.59562C14.5104 2.52467 15.1135 2.37093 15.6812 2.13442C15.2554 2.74936 14.7351 3.28152 14.1201 3.73091Z" fill="#22577A" />
                                    </svg>
                                </div>
                                <div className='footer-social-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M12.234 9.16642C12.234 8.64609 12.1394 8.26174 11.9502 8.0134C11.7609 7.76506 11.4062 7.64089 10.8858 7.64089C10.2472 7.64089 9.79786 7.8301 9.53769 8.20853C9.27752 8.58696 9.14743 9.11912 9.14743 9.80502V14.9847C9.14743 15.103 9.11196 15.1976 9.041 15.2686C8.97005 15.3395 8.87544 15.375 8.75718 15.375H6.06088C5.96628 15.375 5.87758 15.3395 5.7948 15.2686C5.71202 15.1976 5.67063 15.103 5.67063 14.9847V5.4058C5.67063 5.31119 5.71202 5.2225 5.7948 5.13972C5.87758 5.05694 5.96628 5.01555 6.06088 5.01555H8.68622C8.78083 5.01555 8.8577 5.0392 8.91683 5.0865C8.97596 5.1338 9.01735 5.20476 9.041 5.29937C9.041 5.39397 9.041 5.4531 9.041 5.47675C9.06465 5.52406 9.07648 5.60684 9.07648 5.7251C9.73873 5.0865 10.6375 4.7672 11.7728 4.7672C13.0263 4.7672 14.0079 5.0865 14.7174 5.7251C15.427 6.36369 15.7817 7.29794 15.7817 8.52783V14.9847C15.7817 15.103 15.7404 15.1976 15.6576 15.2686C15.5748 15.3395 15.4861 15.375 15.3915 15.375H12.6242C12.5296 15.375 12.4409 15.3395 12.3582 15.2686C12.2754 15.1976 12.234 15.103 12.234 14.9847V9.16642ZM4.287 2.08864C4.287 2.08864 4.287 2.21577 4.287 2.47003C4.287 2.72429 4.10962 3.03471 3.75484 3.40132C3.40006 3.76792 2.96842 3.95122 2.45991 3.95122C1.9514 3.95122 1.51975 3.76792 1.16498 3.40132C0.8102 3.03471 0.632812 2.59716 0.632812 2.08864C0.632812 1.58013 0.8102 1.14849 1.16498 0.793714C1.51975 0.438938 1.9514 0.26155 2.45991 0.26155C2.96842 0.26155 3.40006 0.438938 3.75484 0.793714C4.10962 1.14849 4.287 1.58013 4.287 2.08864ZM4.21605 5.4058V14.9847C4.21605 15.103 4.17466 15.1976 4.09188 15.2686C4.0091 15.3395 3.9204 15.375 3.8258 15.375H1.1295C1.01124 15.375 0.916633 15.3395 0.845678 15.2686C0.774723 15.1976 0.739245 15.103 0.739245 14.9847V5.4058C0.739245 5.31119 0.774723 5.2225 0.845678 5.13972C0.916633 5.05694 1.01124 5.01555 1.1295 5.01555H3.8258C3.9204 5.01555 4.0091 5.05694 4.09188 5.13972C4.17466 5.2225 4.21605 5.31119 4.21605 5.4058Z" fill="#22577A" />
                                    </svg>
                                </div>
                                <div className='footer-social-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14.3558 3.6674V2.14186C14.3558 1.88169 14.2257 1.75161 13.9656 1.75161H12.4755C12.2153 1.75161 12.0852 1.88169 12.0852 2.14186V3.6674C12.0852 3.90392 12.2153 4.02217 12.4755 4.02217H13.9656C14.2257 4.02217 14.3558 3.90392 14.3558 3.6674ZM2.61273 13.8849H13.9656C14.2257 13.8849 14.3558 13.7549 14.3558 13.4947V7.07325H12.7593C12.8066 7.35707 12.8303 7.60541 12.8303 7.81827C12.8303 9.07182 12.3868 10.1421 11.4999 11.029C10.6129 11.9159 9.54269 12.3594 8.28915 12.3594C7.03561 12.3594 5.96537 11.9159 5.07843 11.029C4.19149 10.1421 3.74802 9.07182 3.74802 7.81827C3.74802 7.55811 3.77167 7.30976 3.81897 7.07325H2.25796V13.4947C2.25796 13.7549 2.37622 13.8849 2.61273 13.8849ZM10.4533 5.68962C10.4533 5.68962 10.3055 5.5418 10.0098 5.24615C9.71416 4.9505 9.14652 4.80268 8.30689 4.80268C7.46725 4.80268 6.75179 5.09833 6.16049 5.68962C5.5692 6.28091 5.27355 6.99046 5.27355 7.81827C5.27355 8.64609 5.5692 9.35564 6.16049 9.94693C6.75179 10.5382 7.46725 10.8339 8.30689 10.8339C9.14652 10.8339 9.86199 10.5382 10.4533 9.94693C11.0446 9.35564 11.3402 8.64609 11.3402 7.81827C11.3402 6.99046 11.0446 6.28091 10.4533 5.68962ZM14.3558 0.26155C14.7815 0.26155 15.1422 0.409373 15.4379 0.70502C15.7335 1.00067 15.8814 1.34953 15.8814 1.75161V13.8849C15.8814 14.287 15.7335 14.6359 15.4379 14.9315C15.1422 15.2272 14.7815 15.375 14.3558 15.375H2.25796C1.83223 15.375 1.47154 15.2272 1.17589 14.9315C0.880245 14.6359 0.732422 14.287 0.732422 13.8849V1.75161C0.732422 1.34953 0.880245 1.00067 1.17589 0.70502C1.47154 0.409373 1.83223 0.26155 2.25796 0.26155H14.3558Z" fill="#22577A" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='container-fluid'>
                <div className='row'>
                        <div className='col-12'>
                            <div className='copy-rights-div'></div>
                        </div>
                    </div>
                </div> */}
            </footer>
            <div className='container-fluid copy-rights-con'>
                        <div className='col-12'>
                            <div className='copy-rights-div'>
                                <div className='mt-3'>
                                    <span className='copy-right-text'>© [2024] [ADM Software]. All rights reserved. </span>
                                </div>
                                <div className='mt-3'>
                                    <span className='copy-right-text'>Contact us</span>
                                    <div className='footer-line-div'></div>
                                    <span className='copy-right-text'>Privacy Policy</span>
                                    <div className='footer-line-div'></div>
                                    <span className='copy-right-text'>Terms of service</span>
                                    <div className='footer-line-div'></div>
                                </div>
                            </div>
                    </div>
                </div>
        </>
    )
}

export default Footer;