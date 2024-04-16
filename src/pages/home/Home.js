import React from 'react';
import Banner from '../../components/banner/Banner';
import './home.css';
import Button from '../../components/button/Button';
import { topfeaturesimg, topintegrationimg } from '../../assets/image';
import {motion} from 'framer-motion';

function Home() {
    return (
        <div className='home-page'>
            <Banner />
            <section className='Top-Integrations-container'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <motion.div
                            variants={{
                                hidden:{opacity:0,y:75},
                                visible:{opacity:1,y:0}
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{duration:1,delay:0.50}}
                            >
                            <span className='Top-Integrations-header'>Top Integrations</span>
                                 </motion.div>
                            <p className='Top-Integrations-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec tor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec torLorem ipsum dolor sit amet, consectetur m u</p>
                        </div>
                    </div>
                </div>
                <div className='top-integration-svg-con'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 svg-div'>
                            <img src={topintegrationimg} class="img-fluid" alt="Responsive image"/>
                                {/* <svg className='top-line-svg-1' xmlns="http://www.w3.org/2000/svg" width="1905" height="251" viewBox="0 0 1905 251" fill="none">
                                    <path d="M1 250C91.8152 157.654 269.327 -171.866 620.622 117.482C898.223 346.13 1083.13 209.481 1206.7 151.974C1330.28 94.4657 1658.03 -75.8699 1904 59.9611" stroke="black" stroke-dasharray="9 9" />
                                </svg>
                                <svg className='top-line-svg-2' xmlns="http://www.w3.org/2000/svg" width="1945" height="182" viewBox="0 0 1945 182" fill="none">
                                    <path d="M0 0.0653251C92.0601 85.2037 346.568 228.832 628.117 122.24C980.053 -10.9996 1206.72 -23.9104 1331.99 29.109C1457.25 82.1284 1559.26 220.899 1717.33 171.57C1843.79 132.106 1921.13 95.4986 1944 82.1276" stroke="black" stroke-dasharray="9 9" />
                                </svg>
                                <div className='icon-round-div'></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='top-fuatures-back-img'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='cards-container-header'>Top Features</span>
                            <div className="align-items-center">
                                <div className="col">
                                    <p className='top-features-para mt-4'>Utilize Active Directory for centralized user management, authentication, and access control</p>
                                </div>
                            </div>
                        </div>
                        <div className='container top-features-inner-con'>
                            <div className='row'>
                                <div className='col-md-3 top-features-left-div'>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Self-service portal</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span>
                                    </div>

                                </div>
                                <div className='col-md-6  top-features-img-div'><div className='circle pulse'><img src={topfeaturesimg} className="img-fluid" alt="Responsive image" /></div></div>
                                <div className='col-md-3  top-features-right-div'>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Self-service portal</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span><br />
                                    </div>
                                    <div className='top-features-inner-span-div'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M16.8002 8.40039L9.64068 15.6004L7.2002 13.1461" stroke="#51E49E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span className='top-features-inner-span mt-4'>Notifications</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='frequently-ask-ques-section'>
                <div className='container top-features-acc-container'>
                <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='Top-Integrations-header'>Frequently Asked Questions</span>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
                <div className='container-fluid frequently-ask-ques-back-block'>
                    <svg className='round-animate-svg' xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" fill="none">
                        <path d="M128.077 35.6585L134.406 41.2605L139.965 47.6259L144.666 54.6499L148.429 62.2173L151.194 70.2039L152.915 78.4784L153.563 86.9051L153.129 95.3455L151.619 103.661L149.058 111.715L145.488 119.376L140.968 126.517L135.571 133.022L129.388 138.783L122.518 143.706L115.075 147.71L107.181 150.729L98.966 152.714L90.5643 153.633L82.1144 153.469L73.7546 152.226L65.6225 149.925L57.8513 146.602L50.569 142.313L43.8949 137.128L37.9386 131.132L32.7979 124.423L28.5574 117.113L25.2865 109.32L23.039 101.173L21.8519 92.8047L21.7445 84.3537L22.7187 75.9584L24.7584 67.7567L27.8303 59.8831L31.8837 52.467L36.8523 45.6301L42.6543 39.4847L49.1945 34.1317L56.3656 29.659L64.0498 26.14L72.1208 23.6326L80.4463 22.1778L88.8894 21.7996L97.3116 22.5042L105.575 24.2801L113.543 27.0979L121.085 30.9116L128.077 35.6585Z" stroke="url(#paint0_linear_247_12013)" stroke-width="43" />
                        <defs>
                            <linearGradient id="paint0_linear_247_12013" x1="64.4169" y1="76.202" x2="149.279" y2="149.82" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#BDEDFF" />
                                <stop offset="1" stop-color="#D28DEA" />
                            </linearGradient>
                        </defs>
                    </svg> </div>
            </section>
            {/* <section className='home-cards-container'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='cards-container-header'>Top Features</span>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 cards-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267" maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267"  maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267" maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                    <div className="go-corner" href="#">
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 cards-div center-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267" maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267" maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267" maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                </div>
                            </div>
                            <div className='col-md-4 cards-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267" maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267" maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267"  maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                </div>
                            </div>
                            <div className='col-md-4 cards-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267"  maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267" maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267" maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                </div>
                            </div>
                            <div className='col-md-4 cards-div center-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267"  maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267"  maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267" maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                </div>
                            </div>
                            <div className='col-md-4 cards-div'>
                                <div className='card-mar'>
                                    <svg className='card-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="45" viewBox="0 0 53 45" fill="none">
                                        <g clip-path="url(#clip0_11_4267)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0503 21.5925C19.2818 21.5925 15.3955 17.6661 15.3955 12.8257C15.3955 12.4944 15.4055 12.2023 15.4357 11.9424C15.476 11.5703 15.8031 11.3002 16.1693 11.3398C16.5367 11.3805 16.8033 11.7119 16.7643 12.0828C16.7443 12.293 16.734 12.5352 16.734 12.8153C16.734 16.9026 20.0154 20.2264 24.0503 20.2264C28.0852 20.2264 31.3663 16.9026 31.3663 12.8153C31.3663 12.5441 31.3563 12.3234 31.336 12.122C31.2958 11.7499 31.5639 11.4186 31.9313 11.379C32.2987 11.3383 32.6258 11.6099 32.6646 11.9718C32.6948 12.233 32.7051 12.4944 32.7051 12.8153C32.7051 17.6557 28.8185 21.5925 24.0503 21.5925Z" fill="url(#paint0_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3009 24.9487C27.0128 24.9487 26.7462 24.7574 26.6569 24.4567C26.2103 22.9006 26.3497 21.2335 27.0531 19.7564C27.2116 19.415 27.6081 19.2749 27.9452 19.4355C28.2823 19.5958 28.4206 19.9974 28.2624 20.3391C27.7073 21.514 27.5978 22.8393 27.9452 24.0846C28.0445 24.4466 27.8457 24.8172 27.4897 24.918C27.4307 24.9386 27.3602 24.9487 27.3009 24.9487Z" fill="url(#paint1_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8176 24.9487C20.7586 24.9487 20.6981 24.9386 20.6291 24.918C20.2717 24.8172 20.0741 24.4362 20.1736 24.0846C20.5307 22.8497 20.4112 21.514 19.8565 20.3391C19.6979 19.9974 19.8365 19.5958 20.1736 19.4355C20.5008 19.2749 20.9069 19.415 21.0655 19.7564C21.76 21.2323 21.8986 22.8994 21.4619 24.4567C21.3727 24.7574 21.1045 24.9487 20.8176 24.9487Z" fill="url(#paint2_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8802 5.94737C23.0488 5.94737 23.2073 6.00745 23.3269 6.11809C24.7347 7.41429 29.3143 10.0052 31.3374 11.1191C31.3476 10.5367 31.4166 9.96446 31.545 9.41124C31.7036 8.73845 31.6733 7.96484 31.4657 7.11091C31.0596 5.48605 30.0279 4.05988 28.5508 3.09531C26.6082 1.83986 24.8028 1.39758 23.1874 1.79019C20.9767 2.333 19.8455 4.24101 19.837 4.26005C19.7374 4.43077 19.5789 4.54171 19.3903 4.58127C18.2794 4.80167 17.4666 5.41467 16.9908 6.41909C16.6537 7.13144 16.5947 7.7953 16.5947 7.87561V10.4067C17.9535 8.93089 19.2908 7.90624 20.2634 7.26379C20.9767 6.79237 21.5819 6.46995 21.9681 6.28019C22.6714 5.94737 22.781 5.94737 22.8802 5.94737ZM15.9201 12.9379C15.8511 12.9379 15.7718 12.9275 15.7025 12.8968C15.4347 12.8064 15.2471 12.5453 15.2471 12.2547V7.8655C15.2471 7.85538 15.2471 7.84497 15.2471 7.83486C15.2961 6.54907 16.119 4.00902 18.8453 3.32582C19.292 2.68367 20.6208 1.02549 22.8702 0.483873C24.853 0.00203577 27.0044 0.504395 29.2653 1.96983C31.0305 3.11435 32.2697 4.8323 32.7555 6.78969C33.0133 7.8539 33.0435 8.83898 32.8447 9.72235C32.7164 10.2741 32.6559 10.8475 32.6662 11.4302V12.2535C32.6662 12.4941 32.5467 12.7148 32.339 12.8359C32.1402 12.9569 31.8924 12.9658 31.6848 12.8561C31.3967 12.7059 25.0518 9.28126 22.7519 7.4131C21.8007 7.85538 18.9851 9.34134 16.4361 12.6752C16.3166 12.8472 16.119 12.9379 15.9201 12.9379Z" fill="url(#paint3_linear_11_4267)" />
                                            <mask id="mask0_11_4267"  maskUnits="userSpaceOnUse" x="8" y="23" width="31" height="22">
                                                <path d="M8.17578 23.4512H38.4907V44.9233H8.17578V23.4512Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5547 44.922H16.5539C14.293 44.922 12.1716 43.8476 10.5853 41.9093C9.02887 40.0013 8.17578 37.4704 8.17578 34.7787C8.17578 28.5428 12.3693 23.4707 17.5151 23.4707H20.8164C21.0643 23.4707 21.3021 23.6108 21.4114 23.8428L21.4217 23.863L22.0166 24.9272C22.4924 25.7811 23.2359 26.2731 24.0485 26.2731C24.8613 26.2731 25.6049 25.7811 26.0906 24.9272L26.7058 23.8428C26.8153 23.612 27.0529 23.4707 27.3008 23.4707H30.5921C33.7249 23.4707 36.6301 25.3582 38.375 28.5121C38.5536 28.8334 38.4341 29.245 38.1172 29.4363C37.7901 29.6171 37.3836 29.5065 37.2051 29.1751C35.7077 26.4539 33.2292 24.8267 30.5921 24.8267H27.6872L27.2406 25.6104C26.5273 26.876 25.3371 27.6392 24.0485 27.6392C22.7602 27.6392 21.56 26.8861 20.8467 25.6104L20.41 24.8368H17.4948C13.0826 24.8368 9.49432 29.3063 9.49432 34.7888C9.49432 37.1694 10.2379 39.3883 11.6055 41.0554C12.9343 42.6829 14.6892 43.5761 16.5425 43.5761H31.5445C32.278 43.5761 32.9825 43.436 33.6556 43.1749C34.003 43.0345 34.3892 43.2052 34.519 43.5559C34.6573 43.9074 34.4887 44.2989 34.1428 44.43C33.3288 44.7512 32.4569 44.922 31.5547 44.922Z" fill="url(#paint4_linear_11_4267)" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.0788 44.8715H16.0188C15.6514 44.8715 15.3545 44.5708 15.3545 44.1988V33.1213C15.3545 31.5345 16.634 30.2383 18.2004 30.2383H29.9086C30.3841 30.2383 30.8407 30.3593 31.2372 30.58C31.5643 30.7609 31.6838 31.1725 31.5053 31.4937C31.3264 31.8251 30.92 31.9461 30.6032 31.7653C30.4043 31.6543 30.1565 31.5946 29.9086 31.5946H18.2004C17.3675 31.5946 16.683 32.2876 16.683 33.1314V43.5358H31.4057V42.8529C31.4057 42.4808 31.7026 42.1798 32.07 42.1798C32.4374 42.1798 32.7343 42.4808 32.7343 42.8529V44.219C32.7533 44.5694 32.4564 44.8715 32.0788 44.8715Z" fill="url(#paint5_linear_11_4267)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.05 36.015C23.2169 36.015 22.5326 36.7083 22.5326 37.5521C22.5326 38.3957 23.2169 39.089 24.05 39.089C24.8828 39.089 25.5673 38.3957 25.5673 37.5521C25.5659 36.7071 24.8916 36.015 24.05 36.015ZM24.05 40.4337C22.4836 40.4337 21.2041 39.1375 21.2041 37.551C21.2041 35.9642 22.4836 34.668 24.05 34.668C25.6164 34.668 26.8958 35.9642 26.8958 37.551C26.9047 39.1375 25.6252 40.4337 24.05 40.4337Z" fill="url(#paint6_linear_11_4267)" />
                                            <mask id="mask1_11_4267" maskUnits="userSpaceOnUse" x="28" y="28" width="17" height="17">
                                                <path d="M28.1162 28.0195H44.8191V44.9231H28.1162V28.0195Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask1_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4917 29.4068C32.6356 29.4068 29.5029 32.5803 29.5029 36.4865C29.5029 40.3926 32.6356 43.5659 36.4917 43.5659C40.3481 43.5659 43.4809 40.3926 43.4809 36.4865C43.4809 32.5803 40.3481 29.4068 36.4917 29.4068ZM36.4917 44.9219C31.9021 44.9219 28.1641 41.1356 28.1641 36.4865C28.1641 31.8374 31.9021 28.0508 36.4917 28.0508C41.0816 28.0508 44.8194 31.8374 44.8194 36.4865C44.8194 41.1356 41.0816 44.9219 36.4917 44.9219Z" fill="url(#paint7_linear_11_4267)" />
                                            </g>
                                            <mask id="mask2_11_4267"  maskUnits="userSpaceOnUse" x="30" y="30" width="13" height="13">
                                                <path d="M30.7969 30.4844H42.2719V42.0973H30.7969V30.4844Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask2_11_4267)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5513 31.4413C33.9021 31.4413 31.7498 33.6216 31.7498 36.3052C31.7498 38.9887 33.9021 41.1688 36.5513 41.1688C39.2006 41.1688 41.3529 38.9887 41.3529 36.3052C41.3529 33.6216 39.2006 31.4413 36.5513 31.4413ZM36.5513 42.1004C33.3981 42.1004 30.8301 39.4992 30.8301 36.3052C30.8301 33.1112 33.3981 30.5098 36.5513 30.5098C39.7046 30.5098 42.2724 33.1112 42.2724 36.3052C42.2724 39.4992 39.7046 42.1004 36.5513 42.1004Z" fill="url(#paint8_linear_11_4267)" />
                                            </g>
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_11_4267" x1="15.3955" y1="16.4642" x2="32.7051" y2="16.4642" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_11_4267" x1="26.4004" y1="22.1589" x2="28.3277" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_11_4267" x1="19.791" y1="22.1589" x2="21.7116" y2="22.1589" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_11_4267" x1="15.2471" y1="6.62226" x2="32.9743" y2="6.62226" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint4_linear_11_4267" x1="8.17578" y1="34.1963" x2="38.4582" y2="34.1963" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint5_linear_11_4267" x1="15.3545" y1="37.5549" x2="32.7351" y2="37.5549" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_11_4267" x1="21.2041" y1="37.5508" x2="26.8959" y2="37.5508" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_11_4267" x1="28.1641" y1="36.4863" x2="44.8194" y2="36.4863" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <linearGradient id="paint8_linear_11_4267" x1="30.8301" y1="36.3051" x2="42.2724" y2="36.3051" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#25C4DC" />
                                                <stop offset="1" stop-color="#504D9E" />
                                            </linearGradient>
                                            <clipPath id="clip0_11_4267">
                                                <rect width="53" height="45" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className='cards-content'>Self-service Portal</span>
                                    <svg className='cards-color-svg' xmlns="http://www.w3.org/2000/svg" width="60" height="63" viewBox="0 0 60 63" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#504D9E" />
                                    </svg>
                                    <svg className='cards-color-2svg' xmlns="http://www.w3.org/2000/svg" width="44" height="88" viewBox="0 0 44 88" fill="none">
                                        <circle cx="44" cy="44" r="44" fill="#25C4DC" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div className='container free-trial-con'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='free-trial-con-header'>Begin your free trial now</span>
                        </div>
                        <div className='row justify-content-center col align-self-center'>
                            <p className='free-trial-con-para'>Utilize Active Directory for centralized user management, authentication,
                                and access control. Streamline
                                IT operations, enhance security, and seamlessly integrate with your infrastructure</p>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-4 free-trial-con-btn">
                                <Button />
                            </div>
                        </div>
                        <div className='row justify-content-center col align-self-center mt-4'>
                            <span className='cont-span'>30 days free trial. Any doubts? <a className='cont-links' href='#'>Contact us</a></span>
                        </div>
                        <div className='lock-icon-div'>
                            <div className='lock-back-img'></div>
                        </div>
                        <div className='girl-icon'>
                            <div className='girl-back-img'></div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className='benifits-con'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='free-trial-con-header benefits-header'>Benefits of Asign2</span>
                        </div>
                        <div className='col-md-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                                <g clip-path="url(#clip0_105_4917)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7723 23.512C21.464 23.512 17.1377 19.2366 17.1377 13.966C17.1377 13.6052 17.1488 13.2872 17.1825 13.0041C17.2273 12.5989 17.5914 12.3049 17.9991 12.3479C18.4081 12.3923 18.7049 12.7531 18.6614 13.157C18.6392 13.3859 18.6277 13.6496 18.6277 13.9546C18.6277 18.4053 22.2806 22.0245 26.7723 22.0245C31.264 22.0245 34.9165 18.4053 34.9165 13.9546C34.9165 13.6593 34.9054 13.419 34.8828 13.1997C34.838 12.7946 35.1365 12.4338 35.5454 12.3907C35.9544 12.3463 36.3186 12.642 36.3617 13.0362C36.3954 13.3205 36.4068 13.6052 36.4068 13.9546C36.4068 19.2253 32.0802 23.512 26.7723 23.512Z" fill="url(#paint0_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3911 27.1653C30.0704 27.1653 29.7736 26.9571 29.6742 26.6297C29.177 24.9352 29.3323 23.1199 30.1152 21.5116C30.2918 21.1398 30.7331 20.9872 31.1084 21.1621C31.4837 21.3367 31.6376 21.7739 31.4614 22.146C30.8436 23.4253 30.7216 24.8685 31.1084 26.2245C31.2189 26.6186 30.9975 27.0222 30.6013 27.132C30.5356 27.1543 30.4572 27.1653 30.3911 27.1653Z" fill="url(#paint1_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1741 27.1653C23.1084 27.1653 23.041 27.1543 22.9642 27.132C22.5664 27.0222 22.3464 26.6073 22.4572 26.2245C22.8547 24.8798 22.7217 23.4253 22.1041 22.146C21.9276 21.7739 22.0819 21.3367 22.4572 21.1621C22.8214 20.9872 23.2735 21.1398 23.45 21.5116C24.2231 23.1186 24.3774 24.9339 23.8913 26.6297C23.792 26.9571 23.4935 27.1653 23.1741 27.1653Z" fill="url(#paint2_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4699 6.47611C25.6576 6.47611 25.8341 6.54153 25.9671 6.66201C27.5343 8.07343 32.6324 10.8946 34.8845 12.1075C34.8959 11.4734 34.9728 10.8503 35.1156 10.2479C35.2921 9.51529 35.2585 8.67291 35.0273 7.74308C34.5752 5.97379 33.4268 4.42084 31.7825 3.37054C29.62 2.00349 27.6102 1.52189 25.8119 1.9494C23.3509 2.54046 22.0917 4.61808 22.0822 4.6388C21.9714 4.8247 21.7948 4.94551 21.585 4.98858C20.3483 5.22857 19.4434 5.89606 18.9138 6.98976C18.5385 7.76543 18.4728 8.4883 18.4728 8.57575V11.3319C19.9854 9.72483 21.4742 8.60911 22.5569 7.90955C23.3509 7.39622 24.0247 7.04515 24.4546 6.83852C25.2375 6.47611 25.3594 6.47611 25.4699 6.47611ZM17.7219 14.088C17.6451 14.088 17.5568 14.0767 17.4797 14.0433C17.1815 13.9448 16.9727 13.6605 16.9727 13.3441V8.56474C16.9727 8.55373 16.9727 8.54239 16.9727 8.53138C17.0272 7.1313 17.9432 4.36546 20.9782 3.62153C21.4755 2.9223 22.9547 1.11673 25.4588 0.52697C27.6661 0.00230354 30.061 0.549317 32.5778 2.14502C34.5429 3.39126 35.9224 5.26193 36.4631 7.3933C36.7501 8.55211 36.7838 9.62476 36.5625 10.5866C36.4196 11.1874 36.3523 11.8118 36.3637 12.4463V13.3428C36.3637 13.6048 36.2307 13.8451 35.9996 13.9769C35.7783 14.1087 35.5023 14.1184 35.2712 13.9989C34.9505 13.8354 27.8874 10.1064 25.3271 8.07213C24.2682 8.55373 21.1338 10.1718 18.2963 13.802C18.1632 13.9892 17.9432 14.088 17.7219 14.088Z" fill="url(#paint3_linear_105_4917)" />
                                    <mask id="mask0_105_4917" maskUnits="userSpaceOnUse" x="9" y="25" width="34" height="24">
                                        <path d="M9.10156 25.5371H42.8484V48.9178H9.10156V25.5371Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1272 48.9166H18.4282C15.9113 48.9166 13.5498 47.7468 11.7838 45.6362C10.0512 43.5586 9.10156 40.8028 9.10156 37.8717C9.10156 31.0815 13.7698 25.5586 19.4982 25.5586H23.1732C23.4491 25.5586 23.7139 25.7111 23.8355 25.9638L23.847 25.9858L24.5093 27.1446C25.0389 28.0744 25.8666 28.6101 26.7712 28.6101C27.676 28.6101 28.5038 28.0744 29.0445 27.1446L29.7293 25.9638C29.8513 25.7124 30.1157 25.5586 30.3916 25.5586H34.0556C37.543 25.5586 40.7771 27.6139 42.7196 31.0482C42.9184 31.3979 42.7853 31.8462 42.4326 32.0544C42.0684 32.2513 41.616 32.1309 41.4172 31.7701C39.7503 28.807 36.9912 27.0351 34.0556 27.0351H30.8219L30.3246 27.8885C29.5306 29.2666 28.2056 30.0976 26.7712 30.0976C25.337 30.0976 24.001 29.2776 23.2069 27.8885L22.7208 27.0461H19.4756C14.5638 27.0461 10.5694 31.9129 10.5694 37.8828C10.5694 40.475 11.3971 42.8911 12.9195 44.7063C14.3987 46.4786 16.3523 47.4511 18.4154 47.4511H35.1158C35.9324 47.4511 36.7166 47.2986 37.4659 47.0142C37.8526 46.8614 38.2825 47.0473 38.427 47.4291C38.581 47.8119 38.3933 48.2381 38.0082 48.381C37.102 48.7307 36.1315 48.9166 35.1272 48.9166Z" fill="url(#paint4_linear_105_4917)" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7104 48.8617H17.8322C17.4233 48.8617 17.0928 48.5343 17.0928 48.1291V36.067C17.0928 34.3392 18.5171 32.9277 20.2608 32.9277H33.2946C33.8238 32.9277 34.3322 33.0595 34.7735 33.2999C35.1377 33.4968 35.2707 33.945 35.072 34.2948C34.8729 34.6556 34.4204 34.7874 34.0677 34.5905C33.8464 34.4697 33.5705 34.4046 33.2946 34.4046H20.2608C19.3337 34.4046 18.5717 35.1592 18.5717 36.078V47.4072H34.9611V46.6636C34.9611 46.2585 35.2916 45.9307 35.7006 45.9307C36.1096 45.9307 36.4401 46.2585 36.4401 46.6636V48.1512C36.4613 48.5327 36.1308 48.8617 35.7104 48.8617Z" fill="url(#paint5_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7725 39.2168C25.8451 39.2168 25.0834 39.9717 25.0834 40.8906C25.0834 41.809 25.8451 42.564 26.7725 42.564C27.6996 42.564 28.4617 41.809 28.4617 40.8906C28.46 39.9704 27.7095 39.2168 26.7725 39.2168ZM26.7725 44.0282C25.0288 44.0282 23.6045 42.6168 23.6045 40.8893C23.6045 39.1614 25.0288 37.75 26.7725 37.75C28.5163 37.75 29.9406 39.1614 29.9406 40.8893C29.9504 42.6168 28.5261 44.0282 26.7725 44.0282Z" fill="url(#paint6_linear_105_4917)" />
                                    <mask id="mask1_105_4917"  maskUnits="userSpaceOnUse" x="31" y="30" width="19" height="19">
                                        <path d="M31.2988 30.5117H49.8926V48.9178H31.2988V30.5117Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.622 32.0214C36.3294 32.0214 32.8419 35.4771 32.8419 39.7305C32.8419 43.9838 36.3294 47.4392 40.622 47.4392C44.9149 47.4392 48.4023 43.9838 48.4023 39.7305C48.4023 35.4771 44.9149 32.0214 40.622 32.0214ZM40.622 48.9157C35.5127 48.9157 31.3516 44.7929 31.3516 39.7305C31.3516 34.6681 35.5127 30.5449 40.622 30.5449C45.7315 30.5449 49.8924 34.6681 49.8924 39.7305C49.8924 44.7929 45.7315 48.9157 40.622 48.9157Z" fill="url(#paint7_linear_105_4917)" />
                                    </g>
                                    <mask id="mask2_105_4917" maskUnits="userSpaceOnUse" x="34" y="33" width="14" height="13">
                                        <path d="M34.2842 33.1934H47.0583V45.8385H34.2842V33.1934Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask2_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6901 34.2351C37.7411 34.2351 35.3452 36.6092 35.3452 39.5313C35.3452 42.4534 37.7411 44.8272 40.6901 44.8272C43.6394 44.8272 46.0353 42.4534 46.0353 39.5313C46.0353 36.6092 43.6394 34.2351 40.6901 34.2351ZM40.6901 45.8416C37.1801 45.8416 34.3213 43.0092 34.3213 39.5313C34.3213 36.0534 37.1801 33.2207 40.6901 33.2207C44.2004 33.2207 47.059 36.0534 47.059 39.5313C47.059 43.0092 44.2004 45.8416 40.6901 45.8416Z" fill="url(#paint8_linear_105_4917)" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_105_4917" x1="17.1377" y1="17.9279" x2="36.4068" y2="17.9279" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_105_4917" x1="29.3887" y1="24.1276" x2="31.5342" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_105_4917" x1="22.0313" y1="24.1276" x2="24.1693" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_105_4917" x1="16.9727" y1="7.21099" x2="36.7067" y2="7.21099" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_105_4917" x1="9.10156" y1="37.2376" x2="42.8122" y2="37.2376" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_105_4917" x1="17.0928" y1="40.8947" x2="36.441" y2="40.8947" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_105_4917" x1="23.6045" y1="40.8891" x2="29.9406" y2="40.8891" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_105_4917" x1="31.3516" y1="39.7303" x2="49.8924" y2="39.7303" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_105_4917" x1="34.3213" y1="39.5312" x2="47.059" y2="39.5312" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <clipPath id="clip0_105_4917">
                                        <rect width="59" height="49" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='benifits-con-cards-text '>Self-service Portal</span>
                            <p className='benifits-con-cards-para'>Lorem ipsum dolor sit amet, consec adipiscing elit. Nullam ut
                                sem nec torLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec tor Lorem ipsum dolorconsectetur Lorem ipsum dolor
                                sittorLorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='col-md-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                                <g clip-path="url(#clip0_105_4917)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7723 23.512C21.464 23.512 17.1377 19.2366 17.1377 13.966C17.1377 13.6052 17.1488 13.2872 17.1825 13.0041C17.2273 12.5989 17.5914 12.3049 17.9991 12.3479C18.4081 12.3923 18.7049 12.7531 18.6614 13.157C18.6392 13.3859 18.6277 13.6496 18.6277 13.9546C18.6277 18.4053 22.2806 22.0245 26.7723 22.0245C31.264 22.0245 34.9165 18.4053 34.9165 13.9546C34.9165 13.6593 34.9054 13.419 34.8828 13.1997C34.838 12.7946 35.1365 12.4338 35.5454 12.3907C35.9544 12.3463 36.3186 12.642 36.3617 13.0362C36.3954 13.3205 36.4068 13.6052 36.4068 13.9546C36.4068 19.2253 32.0802 23.512 26.7723 23.512Z" fill="url(#paint0_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3911 27.1653C30.0704 27.1653 29.7736 26.9571 29.6742 26.6297C29.177 24.9352 29.3323 23.1199 30.1152 21.5116C30.2918 21.1398 30.7331 20.9872 31.1084 21.1621C31.4837 21.3367 31.6376 21.7739 31.4614 22.146C30.8436 23.4253 30.7216 24.8685 31.1084 26.2245C31.2189 26.6186 30.9975 27.0222 30.6013 27.132C30.5356 27.1543 30.4572 27.1653 30.3911 27.1653Z" fill="url(#paint1_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1741 27.1653C23.1084 27.1653 23.041 27.1543 22.9642 27.132C22.5664 27.0222 22.3464 26.6073 22.4572 26.2245C22.8547 24.8798 22.7217 23.4253 22.1041 22.146C21.9276 21.7739 22.0819 21.3367 22.4572 21.1621C22.8214 20.9872 23.2735 21.1398 23.45 21.5116C24.2231 23.1186 24.3774 24.9339 23.8913 26.6297C23.792 26.9571 23.4935 27.1653 23.1741 27.1653Z" fill="url(#paint2_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4699 6.47611C25.6576 6.47611 25.8341 6.54153 25.9671 6.66201C27.5343 8.07343 32.6324 10.8946 34.8845 12.1075C34.8959 11.4734 34.9728 10.8503 35.1156 10.2479C35.2921 9.51529 35.2585 8.67291 35.0273 7.74308C34.5752 5.97379 33.4268 4.42084 31.7825 3.37054C29.62 2.00349 27.6102 1.52189 25.8119 1.9494C23.3509 2.54046 22.0917 4.61808 22.0822 4.6388C21.9714 4.8247 21.7948 4.94551 21.585 4.98858C20.3483 5.22857 19.4434 5.89606 18.9138 6.98976C18.5385 7.76543 18.4728 8.4883 18.4728 8.57575V11.3319C19.9854 9.72483 21.4742 8.60911 22.5569 7.90955C23.3509 7.39622 24.0247 7.04515 24.4546 6.83852C25.2375 6.47611 25.3594 6.47611 25.4699 6.47611ZM17.7219 14.088C17.6451 14.088 17.5568 14.0767 17.4797 14.0433C17.1815 13.9448 16.9727 13.6605 16.9727 13.3441V8.56474C16.9727 8.55373 16.9727 8.54239 16.9727 8.53138C17.0272 7.1313 17.9432 4.36546 20.9782 3.62153C21.4755 2.9223 22.9547 1.11673 25.4588 0.52697C27.6661 0.00230354 30.061 0.549317 32.5778 2.14502C34.5429 3.39126 35.9224 5.26193 36.4631 7.3933C36.7501 8.55211 36.7838 9.62476 36.5625 10.5866C36.4196 11.1874 36.3523 11.8118 36.3637 12.4463V13.3428C36.3637 13.6048 36.2307 13.8451 35.9996 13.9769C35.7783 14.1087 35.5023 14.1184 35.2712 13.9989C34.9505 13.8354 27.8874 10.1064 25.3271 8.07213C24.2682 8.55373 21.1338 10.1718 18.2963 13.802C18.1632 13.9892 17.9432 14.088 17.7219 14.088Z" fill="url(#paint3_linear_105_4917)" />
                                    <mask id="mask0_105_4917" maskUnits="userSpaceOnUse" x="9" y="25" width="34" height="24">
                                        <path d="M9.10156 25.5371H42.8484V48.9178H9.10156V25.5371Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1272 48.9166H18.4282C15.9113 48.9166 13.5498 47.7468 11.7838 45.6362C10.0512 43.5586 9.10156 40.8028 9.10156 37.8717C9.10156 31.0815 13.7698 25.5586 19.4982 25.5586H23.1732C23.4491 25.5586 23.7139 25.7111 23.8355 25.9638L23.847 25.9858L24.5093 27.1446C25.0389 28.0744 25.8666 28.6101 26.7712 28.6101C27.676 28.6101 28.5038 28.0744 29.0445 27.1446L29.7293 25.9638C29.8513 25.7124 30.1157 25.5586 30.3916 25.5586H34.0556C37.543 25.5586 40.7771 27.6139 42.7196 31.0482C42.9184 31.3979 42.7853 31.8462 42.4326 32.0544C42.0684 32.2513 41.616 32.1309 41.4172 31.7701C39.7503 28.807 36.9912 27.0351 34.0556 27.0351H30.8219L30.3246 27.8885C29.5306 29.2666 28.2056 30.0976 26.7712 30.0976C25.337 30.0976 24.001 29.2776 23.2069 27.8885L22.7208 27.0461H19.4756C14.5638 27.0461 10.5694 31.9129 10.5694 37.8828C10.5694 40.475 11.3971 42.8911 12.9195 44.7063C14.3987 46.4786 16.3523 47.4511 18.4154 47.4511H35.1158C35.9324 47.4511 36.7166 47.2986 37.4659 47.0142C37.8526 46.8614 38.2825 47.0473 38.427 47.4291C38.581 47.8119 38.3933 48.2381 38.0082 48.381C37.102 48.7307 36.1315 48.9166 35.1272 48.9166Z" fill="url(#paint4_linear_105_4917)" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7104 48.8617H17.8322C17.4233 48.8617 17.0928 48.5343 17.0928 48.1291V36.067C17.0928 34.3392 18.5171 32.9277 20.2608 32.9277H33.2946C33.8238 32.9277 34.3322 33.0595 34.7735 33.2999C35.1377 33.4968 35.2707 33.945 35.072 34.2948C34.8729 34.6556 34.4204 34.7874 34.0677 34.5905C33.8464 34.4697 33.5705 34.4046 33.2946 34.4046H20.2608C19.3337 34.4046 18.5717 35.1592 18.5717 36.078V47.4072H34.9611V46.6636C34.9611 46.2585 35.2916 45.9307 35.7006 45.9307C36.1096 45.9307 36.4401 46.2585 36.4401 46.6636V48.1512C36.4613 48.5327 36.1308 48.8617 35.7104 48.8617Z" fill="url(#paint5_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7725 39.2168C25.8451 39.2168 25.0834 39.9717 25.0834 40.8906C25.0834 41.809 25.8451 42.564 26.7725 42.564C27.6996 42.564 28.4617 41.809 28.4617 40.8906C28.46 39.9704 27.7095 39.2168 26.7725 39.2168ZM26.7725 44.0282C25.0288 44.0282 23.6045 42.6168 23.6045 40.8893C23.6045 39.1614 25.0288 37.75 26.7725 37.75C28.5163 37.75 29.9406 39.1614 29.9406 40.8893C29.9504 42.6168 28.5261 44.0282 26.7725 44.0282Z" fill="url(#paint6_linear_105_4917)" />
                                    <mask id="mask1_105_4917" maskUnits="userSpaceOnUse" x="31" y="30" width="19" height="19">
                                        <path d="M31.2988 30.5117H49.8926V48.9178H31.2988V30.5117Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.622 32.0214C36.3294 32.0214 32.8419 35.4771 32.8419 39.7305C32.8419 43.9838 36.3294 47.4392 40.622 47.4392C44.9149 47.4392 48.4023 43.9838 48.4023 39.7305C48.4023 35.4771 44.9149 32.0214 40.622 32.0214ZM40.622 48.9157C35.5127 48.9157 31.3516 44.7929 31.3516 39.7305C31.3516 34.6681 35.5127 30.5449 40.622 30.5449C45.7315 30.5449 49.8924 34.6681 49.8924 39.7305C49.8924 44.7929 45.7315 48.9157 40.622 48.9157Z" fill="url(#paint7_linear_105_4917)" />
                                    </g>
                                    <mask id="mask2_105_4917"  maskUnits="userSpaceOnUse" x="34" y="33" width="14" height="13">
                                        <path d="M34.2842 33.1934H47.0583V45.8385H34.2842V33.1934Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask2_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6901 34.2351C37.7411 34.2351 35.3452 36.6092 35.3452 39.5313C35.3452 42.4534 37.7411 44.8272 40.6901 44.8272C43.6394 44.8272 46.0353 42.4534 46.0353 39.5313C46.0353 36.6092 43.6394 34.2351 40.6901 34.2351ZM40.6901 45.8416C37.1801 45.8416 34.3213 43.0092 34.3213 39.5313C34.3213 36.0534 37.1801 33.2207 40.6901 33.2207C44.2004 33.2207 47.059 36.0534 47.059 39.5313C47.059 43.0092 44.2004 45.8416 40.6901 45.8416Z" fill="url(#paint8_linear_105_4917)" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_105_4917" x1="17.1377" y1="17.9279" x2="36.4068" y2="17.9279" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_105_4917" x1="29.3887" y1="24.1276" x2="31.5342" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_105_4917" x1="22.0313" y1="24.1276" x2="24.1693" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_105_4917" x1="16.9727" y1="7.21099" x2="36.7067" y2="7.21099" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_105_4917" x1="9.10156" y1="37.2376" x2="42.8122" y2="37.2376" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_105_4917" x1="17.0928" y1="40.8947" x2="36.441" y2="40.8947" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_105_4917" x1="23.6045" y1="40.8891" x2="29.9406" y2="40.8891" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_105_4917" x1="31.3516" y1="39.7303" x2="49.8924" y2="39.7303" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_105_4917" x1="34.3213" y1="39.5312" x2="47.059" y2="39.5312" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <clipPath id="clip0_105_4917">
                                        <rect width="59" height="49" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='benifits-con-cards-text '>Self-service Portal</span>
                            <p className='benifits-con-cards-para'>Lorem ipsum dolor sit amet, consec adipiscing elit. Nullam ut
                                sem nec torLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec tor Lorem ipsum dolorconsectetur Lorem ipsum dolor
                                sittorLorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                                <g clip-path="url(#clip0_105_4917)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7723 23.512C21.464 23.512 17.1377 19.2366 17.1377 13.966C17.1377 13.6052 17.1488 13.2872 17.1825 13.0041C17.2273 12.5989 17.5914 12.3049 17.9991 12.3479C18.4081 12.3923 18.7049 12.7531 18.6614 13.157C18.6392 13.3859 18.6277 13.6496 18.6277 13.9546C18.6277 18.4053 22.2806 22.0245 26.7723 22.0245C31.264 22.0245 34.9165 18.4053 34.9165 13.9546C34.9165 13.6593 34.9054 13.419 34.8828 13.1997C34.838 12.7946 35.1365 12.4338 35.5454 12.3907C35.9544 12.3463 36.3186 12.642 36.3617 13.0362C36.3954 13.3205 36.4068 13.6052 36.4068 13.9546C36.4068 19.2253 32.0802 23.512 26.7723 23.512Z" fill="url(#paint0_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3911 27.1653C30.0704 27.1653 29.7736 26.9571 29.6742 26.6297C29.177 24.9352 29.3323 23.1199 30.1152 21.5116C30.2918 21.1398 30.7331 20.9872 31.1084 21.1621C31.4837 21.3367 31.6376 21.7739 31.4614 22.146C30.8436 23.4253 30.7216 24.8685 31.1084 26.2245C31.2189 26.6186 30.9975 27.0222 30.6013 27.132C30.5356 27.1543 30.4572 27.1653 30.3911 27.1653Z" fill="url(#paint1_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1741 27.1653C23.1084 27.1653 23.041 27.1543 22.9642 27.132C22.5664 27.0222 22.3464 26.6073 22.4572 26.2245C22.8547 24.8798 22.7217 23.4253 22.1041 22.146C21.9276 21.7739 22.0819 21.3367 22.4572 21.1621C22.8214 20.9872 23.2735 21.1398 23.45 21.5116C24.2231 23.1186 24.3774 24.9339 23.8913 26.6297C23.792 26.9571 23.4935 27.1653 23.1741 27.1653Z" fill="url(#paint2_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4699 6.47611C25.6576 6.47611 25.8341 6.54153 25.9671 6.66201C27.5343 8.07343 32.6324 10.8946 34.8845 12.1075C34.8959 11.4734 34.9728 10.8503 35.1156 10.2479C35.2921 9.51529 35.2585 8.67291 35.0273 7.74308C34.5752 5.97379 33.4268 4.42084 31.7825 3.37054C29.62 2.00349 27.6102 1.52189 25.8119 1.9494C23.3509 2.54046 22.0917 4.61808 22.0822 4.6388C21.9714 4.8247 21.7948 4.94551 21.585 4.98858C20.3483 5.22857 19.4434 5.89606 18.9138 6.98976C18.5385 7.76543 18.4728 8.4883 18.4728 8.57575V11.3319C19.9854 9.72483 21.4742 8.60911 22.5569 7.90955C23.3509 7.39622 24.0247 7.04515 24.4546 6.83852C25.2375 6.47611 25.3594 6.47611 25.4699 6.47611ZM17.7219 14.088C17.6451 14.088 17.5568 14.0767 17.4797 14.0433C17.1815 13.9448 16.9727 13.6605 16.9727 13.3441V8.56474C16.9727 8.55373 16.9727 8.54239 16.9727 8.53138C17.0272 7.1313 17.9432 4.36546 20.9782 3.62153C21.4755 2.9223 22.9547 1.11673 25.4588 0.52697C27.6661 0.00230354 30.061 0.549317 32.5778 2.14502C34.5429 3.39126 35.9224 5.26193 36.4631 7.3933C36.7501 8.55211 36.7838 9.62476 36.5625 10.5866C36.4196 11.1874 36.3523 11.8118 36.3637 12.4463V13.3428C36.3637 13.6048 36.2307 13.8451 35.9996 13.9769C35.7783 14.1087 35.5023 14.1184 35.2712 13.9989C34.9505 13.8354 27.8874 10.1064 25.3271 8.07213C24.2682 8.55373 21.1338 10.1718 18.2963 13.802C18.1632 13.9892 17.9432 14.088 17.7219 14.088Z" fill="url(#paint3_linear_105_4917)" />
                                    <mask id="mask0_105_4917" maskUnits="userSpaceOnUse" x="9" y="25" width="34" height="24">
                                        <path d="M9.10156 25.5371H42.8484V48.9178H9.10156V25.5371Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1272 48.9166H18.4282C15.9113 48.9166 13.5498 47.7468 11.7838 45.6362C10.0512 43.5586 9.10156 40.8028 9.10156 37.8717C9.10156 31.0815 13.7698 25.5586 19.4982 25.5586H23.1732C23.4491 25.5586 23.7139 25.7111 23.8355 25.9638L23.847 25.9858L24.5093 27.1446C25.0389 28.0744 25.8666 28.6101 26.7712 28.6101C27.676 28.6101 28.5038 28.0744 29.0445 27.1446L29.7293 25.9638C29.8513 25.7124 30.1157 25.5586 30.3916 25.5586H34.0556C37.543 25.5586 40.7771 27.6139 42.7196 31.0482C42.9184 31.3979 42.7853 31.8462 42.4326 32.0544C42.0684 32.2513 41.616 32.1309 41.4172 31.7701C39.7503 28.807 36.9912 27.0351 34.0556 27.0351H30.8219L30.3246 27.8885C29.5306 29.2666 28.2056 30.0976 26.7712 30.0976C25.337 30.0976 24.001 29.2776 23.2069 27.8885L22.7208 27.0461H19.4756C14.5638 27.0461 10.5694 31.9129 10.5694 37.8828C10.5694 40.475 11.3971 42.8911 12.9195 44.7063C14.3987 46.4786 16.3523 47.4511 18.4154 47.4511H35.1158C35.9324 47.4511 36.7166 47.2986 37.4659 47.0142C37.8526 46.8614 38.2825 47.0473 38.427 47.4291C38.581 47.8119 38.3933 48.2381 38.0082 48.381C37.102 48.7307 36.1315 48.9166 35.1272 48.9166Z" fill="url(#paint4_linear_105_4917)" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7104 48.8617H17.8322C17.4233 48.8617 17.0928 48.5343 17.0928 48.1291V36.067C17.0928 34.3392 18.5171 32.9277 20.2608 32.9277H33.2946C33.8238 32.9277 34.3322 33.0595 34.7735 33.2999C35.1377 33.4968 35.2707 33.945 35.072 34.2948C34.8729 34.6556 34.4204 34.7874 34.0677 34.5905C33.8464 34.4697 33.5705 34.4046 33.2946 34.4046H20.2608C19.3337 34.4046 18.5717 35.1592 18.5717 36.078V47.4072H34.9611V46.6636C34.9611 46.2585 35.2916 45.9307 35.7006 45.9307C36.1096 45.9307 36.4401 46.2585 36.4401 46.6636V48.1512C36.4613 48.5327 36.1308 48.8617 35.7104 48.8617Z" fill="url(#paint5_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7725 39.2168C25.8451 39.2168 25.0834 39.9717 25.0834 40.8906C25.0834 41.809 25.8451 42.564 26.7725 42.564C27.6996 42.564 28.4617 41.809 28.4617 40.8906C28.46 39.9704 27.7095 39.2168 26.7725 39.2168ZM26.7725 44.0282C25.0288 44.0282 23.6045 42.6168 23.6045 40.8893C23.6045 39.1614 25.0288 37.75 26.7725 37.75C28.5163 37.75 29.9406 39.1614 29.9406 40.8893C29.9504 42.6168 28.5261 44.0282 26.7725 44.0282Z" fill="url(#paint6_linear_105_4917)" />
                                    <mask id="mask1_105_4917"  maskUnits="userSpaceOnUse" x="31" y="30" width="19" height="19">
                                        <path d="M31.2988 30.5117H49.8926V48.9178H31.2988V30.5117Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.622 32.0214C36.3294 32.0214 32.8419 35.4771 32.8419 39.7305C32.8419 43.9838 36.3294 47.4392 40.622 47.4392C44.9149 47.4392 48.4023 43.9838 48.4023 39.7305C48.4023 35.4771 44.9149 32.0214 40.622 32.0214ZM40.622 48.9157C35.5127 48.9157 31.3516 44.7929 31.3516 39.7305C31.3516 34.6681 35.5127 30.5449 40.622 30.5449C45.7315 30.5449 49.8924 34.6681 49.8924 39.7305C49.8924 44.7929 45.7315 48.9157 40.622 48.9157Z" fill="url(#paint7_linear_105_4917)" />
                                    </g>
                                    <mask id="mask2_105_4917"  maskUnits="userSpaceOnUse" x="34" y="33" width="14" height="13">
                                        <path d="M34.2842 33.1934H47.0583V45.8385H34.2842V33.1934Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask2_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6901 34.2351C37.7411 34.2351 35.3452 36.6092 35.3452 39.5313C35.3452 42.4534 37.7411 44.8272 40.6901 44.8272C43.6394 44.8272 46.0353 42.4534 46.0353 39.5313C46.0353 36.6092 43.6394 34.2351 40.6901 34.2351ZM40.6901 45.8416C37.1801 45.8416 34.3213 43.0092 34.3213 39.5313C34.3213 36.0534 37.1801 33.2207 40.6901 33.2207C44.2004 33.2207 47.059 36.0534 47.059 39.5313C47.059 43.0092 44.2004 45.8416 40.6901 45.8416Z" fill="url(#paint8_linear_105_4917)" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_105_4917" x1="17.1377" y1="17.9279" x2="36.4068" y2="17.9279" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_105_4917" x1="29.3887" y1="24.1276" x2="31.5342" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_105_4917" x1="22.0313" y1="24.1276" x2="24.1693" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_105_4917" x1="16.9727" y1="7.21099" x2="36.7067" y2="7.21099" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_105_4917" x1="9.10156" y1="37.2376" x2="42.8122" y2="37.2376" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_105_4917" x1="17.0928" y1="40.8947" x2="36.441" y2="40.8947" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_105_4917" x1="23.6045" y1="40.8891" x2="29.9406" y2="40.8891" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_105_4917" x1="31.3516" y1="39.7303" x2="49.8924" y2="39.7303" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_105_4917" x1="34.3213" y1="39.5312" x2="47.059" y2="39.5312" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <clipPath id="clip0_105_4917">
                                        <rect width="59" height="49" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='benifits-con-cards-text '>Self-service Portal</span>
                            <p className='benifits-con-cards-para'>Lorem ipsum dolor sit amet, consec adipiscing elit. Nullam ut
                                sem nec torLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec tor Lorem ipsum dolorconsectetur Lorem ipsum dolor
                                sittorLorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="49" viewBox="0 0 59 49" fill="none">
                                <g clip-path="url(#clip0_105_4917)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7723 23.512C21.464 23.512 17.1377 19.2366 17.1377 13.966C17.1377 13.6052 17.1488 13.2872 17.1825 13.0041C17.2273 12.5989 17.5914 12.3049 17.9991 12.3479C18.4081 12.3923 18.7049 12.7531 18.6614 13.157C18.6392 13.3859 18.6277 13.6496 18.6277 13.9546C18.6277 18.4053 22.2806 22.0245 26.7723 22.0245C31.264 22.0245 34.9165 18.4053 34.9165 13.9546C34.9165 13.6593 34.9054 13.419 34.8828 13.1997C34.838 12.7946 35.1365 12.4338 35.5454 12.3907C35.9544 12.3463 36.3186 12.642 36.3617 13.0362C36.3954 13.3205 36.4068 13.6052 36.4068 13.9546C36.4068 19.2253 32.0802 23.512 26.7723 23.512Z" fill="url(#paint0_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3911 27.1653C30.0704 27.1653 29.7736 26.9571 29.6742 26.6297C29.177 24.9352 29.3323 23.1199 30.1152 21.5116C30.2918 21.1398 30.7331 20.9872 31.1084 21.1621C31.4837 21.3367 31.6376 21.7739 31.4614 22.146C30.8436 23.4253 30.7216 24.8685 31.1084 26.2245C31.2189 26.6186 30.9975 27.0222 30.6013 27.132C30.5356 27.1543 30.4572 27.1653 30.3911 27.1653Z" fill="url(#paint1_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1741 27.1653C23.1084 27.1653 23.041 27.1543 22.9642 27.132C22.5664 27.0222 22.3464 26.6073 22.4572 26.2245C22.8547 24.8798 22.7217 23.4253 22.1041 22.146C21.9276 21.7739 22.0819 21.3367 22.4572 21.1621C22.8214 20.9872 23.2735 21.1398 23.45 21.5116C24.2231 23.1186 24.3774 24.9339 23.8913 26.6297C23.792 26.9571 23.4935 27.1653 23.1741 27.1653Z" fill="url(#paint2_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4699 6.47611C25.6576 6.47611 25.8341 6.54153 25.9671 6.66201C27.5343 8.07343 32.6324 10.8946 34.8845 12.1075C34.8959 11.4734 34.9728 10.8503 35.1156 10.2479C35.2921 9.51529 35.2585 8.67291 35.0273 7.74308C34.5752 5.97379 33.4268 4.42084 31.7825 3.37054C29.62 2.00349 27.6102 1.52189 25.8119 1.9494C23.3509 2.54046 22.0917 4.61808 22.0822 4.6388C21.9714 4.8247 21.7948 4.94551 21.585 4.98858C20.3483 5.22857 19.4434 5.89606 18.9138 6.98976C18.5385 7.76543 18.4728 8.4883 18.4728 8.57575V11.3319C19.9854 9.72483 21.4742 8.60911 22.5569 7.90955C23.3509 7.39622 24.0247 7.04515 24.4546 6.83852C25.2375 6.47611 25.3594 6.47611 25.4699 6.47611ZM17.7219 14.088C17.6451 14.088 17.5568 14.0767 17.4797 14.0433C17.1815 13.9448 16.9727 13.6605 16.9727 13.3441V8.56474C16.9727 8.55373 16.9727 8.54239 16.9727 8.53138C17.0272 7.1313 17.9432 4.36546 20.9782 3.62153C21.4755 2.9223 22.9547 1.11673 25.4588 0.52697C27.6661 0.00230354 30.061 0.549317 32.5778 2.14502C34.5429 3.39126 35.9224 5.26193 36.4631 7.3933C36.7501 8.55211 36.7838 9.62476 36.5625 10.5866C36.4196 11.1874 36.3523 11.8118 36.3637 12.4463V13.3428C36.3637 13.6048 36.2307 13.8451 35.9996 13.9769C35.7783 14.1087 35.5023 14.1184 35.2712 13.9989C34.9505 13.8354 27.8874 10.1064 25.3271 8.07213C24.2682 8.55373 21.1338 10.1718 18.2963 13.802C18.1632 13.9892 17.9432 14.088 17.7219 14.088Z" fill="url(#paint3_linear_105_4917)" />
                                    <mask id="mask0_105_4917"  maskUnits="userSpaceOnUse" x="9" y="25" width="34" height="24">
                                        <path d="M9.10156 25.5371H42.8484V48.9178H9.10156V25.5371Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1272 48.9166H18.4282C15.9113 48.9166 13.5498 47.7468 11.7838 45.6362C10.0512 43.5586 9.10156 40.8028 9.10156 37.8717C9.10156 31.0815 13.7698 25.5586 19.4982 25.5586H23.1732C23.4491 25.5586 23.7139 25.7111 23.8355 25.9638L23.847 25.9858L24.5093 27.1446C25.0389 28.0744 25.8666 28.6101 26.7712 28.6101C27.676 28.6101 28.5038 28.0744 29.0445 27.1446L29.7293 25.9638C29.8513 25.7124 30.1157 25.5586 30.3916 25.5586H34.0556C37.543 25.5586 40.7771 27.6139 42.7196 31.0482C42.9184 31.3979 42.7853 31.8462 42.4326 32.0544C42.0684 32.2513 41.616 32.1309 41.4172 31.7701C39.7503 28.807 36.9912 27.0351 34.0556 27.0351H30.8219L30.3246 27.8885C29.5306 29.2666 28.2056 30.0976 26.7712 30.0976C25.337 30.0976 24.001 29.2776 23.2069 27.8885L22.7208 27.0461H19.4756C14.5638 27.0461 10.5694 31.9129 10.5694 37.8828C10.5694 40.475 11.3971 42.8911 12.9195 44.7063C14.3987 46.4786 16.3523 47.4511 18.4154 47.4511H35.1158C35.9324 47.4511 36.7166 47.2986 37.4659 47.0142C37.8526 46.8614 38.2825 47.0473 38.427 47.4291C38.581 47.8119 38.3933 48.2381 38.0082 48.381C37.102 48.7307 36.1315 48.9166 35.1272 48.9166Z" fill="url(#paint4_linear_105_4917)" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7104 48.8617H17.8322C17.4233 48.8617 17.0928 48.5343 17.0928 48.1291V36.067C17.0928 34.3392 18.5171 32.9277 20.2608 32.9277H33.2946C33.8238 32.9277 34.3322 33.0595 34.7735 33.2999C35.1377 33.4968 35.2707 33.945 35.072 34.2948C34.8729 34.6556 34.4204 34.7874 34.0677 34.5905C33.8464 34.4697 33.5705 34.4046 33.2946 34.4046H20.2608C19.3337 34.4046 18.5717 35.1592 18.5717 36.078V47.4072H34.9611V46.6636C34.9611 46.2585 35.2916 45.9307 35.7006 45.9307C36.1096 45.9307 36.4401 46.2585 36.4401 46.6636V48.1512C36.4613 48.5327 36.1308 48.8617 35.7104 48.8617Z" fill="url(#paint5_linear_105_4917)" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7725 39.2168C25.8451 39.2168 25.0834 39.9717 25.0834 40.8906C25.0834 41.809 25.8451 42.564 26.7725 42.564C27.6996 42.564 28.4617 41.809 28.4617 40.8906C28.46 39.9704 27.7095 39.2168 26.7725 39.2168ZM26.7725 44.0282C25.0288 44.0282 23.6045 42.6168 23.6045 40.8893C23.6045 39.1614 25.0288 37.75 26.7725 37.75C28.5163 37.75 29.9406 39.1614 29.9406 40.8893C29.9504 42.6168 28.5261 44.0282 26.7725 44.0282Z" fill="url(#paint6_linear_105_4917)" />
                                    <mask id="mask1_105_4917"  maskUnits="userSpaceOnUse" x="31" y="30" width="19" height="19">
                                        <path d="M31.2988 30.5117H49.8926V48.9178H31.2988V30.5117Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.622 32.0214C36.3294 32.0214 32.8419 35.4771 32.8419 39.7305C32.8419 43.9838 36.3294 47.4392 40.622 47.4392C44.9149 47.4392 48.4023 43.9838 48.4023 39.7305C48.4023 35.4771 44.9149 32.0214 40.622 32.0214ZM40.622 48.9157C35.5127 48.9157 31.3516 44.7929 31.3516 39.7305C31.3516 34.6681 35.5127 30.5449 40.622 30.5449C45.7315 30.5449 49.8924 34.6681 49.8924 39.7305C49.8924 44.7929 45.7315 48.9157 40.622 48.9157Z" fill="url(#paint7_linear_105_4917)" />
                                    </g>
                                    <mask id="mask2_105_4917"  maskUnits="userSpaceOnUse" x="34" y="33" width="14" height="13">
                                        <path d="M34.2842 33.1934H47.0583V45.8385H34.2842V33.1934Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask2_105_4917)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6901 34.2351C37.7411 34.2351 35.3452 36.6092 35.3452 39.5313C35.3452 42.4534 37.7411 44.8272 40.6901 44.8272C43.6394 44.8272 46.0353 42.4534 46.0353 39.5313C46.0353 36.6092 43.6394 34.2351 40.6901 34.2351ZM40.6901 45.8416C37.1801 45.8416 34.3213 43.0092 34.3213 39.5313C34.3213 36.0534 37.1801 33.2207 40.6901 33.2207C44.2004 33.2207 47.059 36.0534 47.059 39.5313C47.059 43.0092 44.2004 45.8416 40.6901 45.8416Z" fill="url(#paint8_linear_105_4917)" />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_105_4917" x1="17.1377" y1="17.9279" x2="36.4068" y2="17.9279" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_105_4917" x1="29.3887" y1="24.1276" x2="31.5342" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_105_4917" x1="22.0313" y1="24.1276" x2="24.1693" y2="24.1276" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_105_4917" x1="16.9727" y1="7.21099" x2="36.7067" y2="7.21099" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_105_4917" x1="9.10156" y1="37.2376" x2="42.8122" y2="37.2376" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_105_4917" x1="17.0928" y1="40.8947" x2="36.441" y2="40.8947" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_105_4917" x1="23.6045" y1="40.8891" x2="29.9406" y2="40.8891" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_105_4917" x1="31.3516" y1="39.7303" x2="49.8924" y2="39.7303" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_105_4917" x1="34.3213" y1="39.5312" x2="47.059" y2="39.5312" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#25C4DC" />
                                        <stop offset="1" stop-color="#504D9E" />
                                    </linearGradient>
                                    <clipPath id="clip0_105_4917">
                                        <rect width="59" height="49" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='benifits-con-cards-text '>Self-service Portal</span>
                            <p className='benifits-con-cards-para'>Lorem ipsum dolor sit amet, consec adipiscing elit. Nullam ut
                                sem nec torLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem nec tor Lorem ipsum dolorconsectetur Lorem ipsum dolor
                                sittorLorem ipsum dolor sit amet, ipsum dolor sit amet, consectetur </p>
                        </div>
                        <div className="row justify-content-center benifits-con-btn mt-4">
                            <div className="col-4 free-trial-con-btn">
                                <Button />
                            </div>
                            <div className="col-4 free-trial-con-btn">
                                <Button />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*  <section className='asked-question-block'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <span className='Top-Integrations-header'>Frequently Asked Questions</span>
                        </div>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Is there a way to streamline user provisioning for better efficiency and productivity?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Absolutely! Our AD Management Software optimizes user provisioning, making it efficient and hassle-free for your organization</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Home;