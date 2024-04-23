import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import "./nav.css";
import Button from '../button/Button';
import { footerlogo } from '../../assets/image';

function Nav() {
    const [close, setClose] = useState(false);

    const handleClick = () => {
        setClose(!close)
    }
    return (
        <>
            <nav className='nav-style'>
                <div className="container-fluid">
                    <div className="nav-dis">
                        <div className="tittle-con">
                            <a href="/">
                                <div className='nav-logo-style'>
                                <img src={footerlogo} alt="..." class="img-thumbnail nav-img"/>
                                   {/*  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1088 2.75653C15.0015 -0.0698812 11.0018 -0.0698854 9.89449 2.75652L1.05834 25.3107C0.200837 27.4995 1.81475 29.8652 4.16551 29.8652H6.09123C6.24776 28.449 6.83672 27.1082 7.78723 26.0303C8.90726 24.7602 10.4523 23.9425 12.1324 23.7306H13.8705C17.0501 24.127 19.5632 26.6706 19.9123 29.8652H21.8378C24.1886 29.8652 25.8025 27.4995 24.945 25.3108L16.1088 2.75653ZM7.78722 17.5934C7.78722 20.4743 10.1206 22.8077 13.0015 22.8077C15.8823 22.8077 18.2157 20.4743 18.2157 17.5934C18.2157 14.7126 15.8823 12.3792 13.0015 12.3792C10.1206 12.3792 7.78722 14.7126 7.78722 17.5934Z" fill="url(#paint0_linear_11_7013)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_11_7013" x1="0.825195" y1="19.8251" x2="79.6644" y2="20.6594" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C5DC" />
                                                <stop offset="1" stop-color="#514C9E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span className='nav-logo-text-style'>
                                        Sign
                                    </span>
                                    <span className='logo-text-2'>2</span>
                                    <svg className='nav-logo-styling' xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2" fill="none">
                                        <path d="M0.230469 0.830078L10.2418 0.830078" stroke="#1D1D1D" stroke-width="0.834278" />
                                    </svg> */}
                                </div>
                            </a>
                        </div>
                        <div className="links-con">
                            <ul className={close ? "slider" : "ul-style"}>
                                <li className='li-style li-one'><a href="/features" className='a-style'>Features</a></li>
                                <li className='li-style'><a href="3" className='a-style'>Pricing</a></li>
                                <li className='li-style'><a href="#" className='a-style'>Download</a></li>
                                <li className='li-style'><a href="#" className='a-style'>Blogs</a></li>
                                <li className='li-style'><a href="#" className='a-style'>About Us</a></li>
                                <li className='li-style'><a href="#" className='a-style'>Contact Us</a></li>
                                <div className='navbar-line line-style-2'></div>
                                <Button/>
                                <div className="cross-mark" onClick={handleClick}>
                                    <FaXmark />
                                </div>
                            </ul>
                            <div className="humberger" onClick={handleClick}>
                                <FaBars />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;