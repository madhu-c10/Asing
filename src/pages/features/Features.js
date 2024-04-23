import React from 'react';
import "./features.css"
import Button from '../../components/button/Button';
import { bannersubimg1, bannersubimg2, feaadminimg, feaadminimgsec1img, feaadminimgsec2img, featuresbanimg, featuresfrequentlybac1, featuresfrequentlybac2, featuresfrequentlybac3, featuresfrequentlybac4, featuresmanlapback, featuresmanwithlaptop, featuresmanwithlaptopanimat1, featuresmanwithlaptopanimat2 } from '../../assets/image';

function Features() {
  return (
    <>
      {/* features banne page */}

      <section className='features-banner-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <span className='features-ban-header'>Active Directory Management</span><br />
              <span className='features-ban-subheader'>super software</span><br />
              <p className='features-ban-para mt-4'>
                Utilize Active Directory for centralized user management,
                authentication, and access control. Streamline IT operations,
                enhance security, and seamlessly integrate with your infrastructure
              </p>
              <div className='row features-ban-header-btn-com'>
                <Button />
                <Button />
              </div>
              <img src={featuresbanimg} className="img-fluid features-ban-img" alt="Responsive image" />
            </div>
          </div>
        </div>
      </section>
      <section className='admin-works-sec'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <span className='free-trial-con-header benefits-header mb-3'>Easy way to simplify admin works</span>
              <p className='admin-works-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='row features-image-con'>
              <div className='col-md-6'>
                <div className="mb-4">
                  <span className='features-left-div-header'>Lorem ipsum nano car development</span>
                </div>
                <div className='features-svg-main-div'>
                  <div className='features-svg-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                    </svg>
                  </div>
                  <p className="features-left-div-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className='features-svg-main-div'>
                  <div className='features-svg-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                    </svg>
                  </div>
                  <p className="features-left-div-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className='features-svg-main-div'>
                  <div className='features-svg-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                    </svg>
                  </div>
                  <p className="features-left-div-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
              </div>
              <div className='col-md-6 features-image-block'>
                <img src={bannersubimg1} className="img-fluid features-adm-subbottom-img-1" alt="Responsive image" />
                <img src={bannersubimg2} className="img-fluid features-adm-subbottom-img-2" alt="Responsive image" />
                <img src={feaadminimg} className="img-fluid features-adm-img" alt="Responsive image" />
                <svg className='features-raight-div-back-img' xmlns="http://www.w3.org/2000/svg" width="242" height="253" viewBox="0 0 242 253" fill="none">
                  <circle cx="127.5" cy="114.5" r="114.5" fill="#25C4DC" />
                  <circle cx="114.5" cy="138.5" r="114.5" fill="#4669AD" />
                </svg>
              </div>
            </div>
            <div className='row features-image-con-2'>
              <div className='col-md-8 features-image-con-div'>
                <div className='features-image-con-2-back-img'>
                  <img src={feaadminimgsec1img} className="img-fluid feaadminimgsec1img" alt="Responsive image" />
                  <img src={feaadminimgsec2img} className="img-fluid feaadminimgsec2img" alt="Responsive image" />
                </div>
              </div>
              <div className='col-md-4 features-sec2-right-div'>
                <div className='features-inner-div'>
                  <div className='features-svg-div'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                    </svg>
                  </div>
                  <span className='features-heading-text'>Heading</span>
                </div>
                <p className='features-left-div-para mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row features-image-con-2'>
            <div className='col-md-6'>
              <div className="mb-4">
                <span className='features-left-div-header'>Lorem ipsum nano car development</span>
              </div>
              <div className="accordion features-accordian accordion-flush" id="accordionFlushExample">
                <div className="accordion-item accordion-item-features">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <div className="accordian-inner-icon-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                        </svg>
                      </div>
                      <span className='accordians-header'>Heading</span>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordians-inned-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-features">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <div className="accordian-inner-icon-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                        </svg>
                      </div>
                      <span className='accordians-header'>Heading</span>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordians-inned-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
                  </div>
                </div>
                <div className="accordion-item accordion-item-features">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <div className="accordian-inner-icon-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 17.5C21.5523 17.5 22 17.0523 22 16.5C22 15.9477 21.5523 15.5 21 15.5V17.5ZM15.6 15.5C15.0477 15.5 14.6 15.9477 14.6 16.5C14.6 17.0523 15.0477 17.5 15.6 17.5V15.5ZM17.3 19.1999C17.3 19.7521 17.7477 20.1999 18.3 20.1999C18.8523 20.1999 19.3 19.7521 19.3 19.1999H17.3ZM19.3 13.7999C19.3 13.2476 18.8523 12.7999 18.3 12.7999C17.7477 12.7999 17.3 13.2476 17.3 13.7999H19.3ZM13.8964 20.8045C14.4431 20.726 14.8227 20.2192 14.7442 19.6725C14.6657 19.1259 14.1589 18.7463 13.6123 18.8248L13.8964 20.8045ZM12.8957 14.6017C13.445 14.6593 13.937 14.2607 13.9945 13.7115C14.0521 13.1622 13.6535 12.6702 13.1043 12.6126L12.8957 14.6017ZM11 19C8.65249 19 6.80538 18.6209 5.58506 18.0649C4.30982 17.4839 4 16.8648 4 16.5H2C2 18.0682 3.25079 19.1991 4.75584 19.8849C6.31583 20.5956 8.46872 21 11 21V19ZM4 16.5C4 16.5942 3.95168 16.4771 4.32372 16.1851C4.66038 15.9209 5.19341 15.6364 5.89797 15.3751C7.29943 14.8553 9.18135 14.5 11 14.5V12.5C8.95266 12.5 6.83457 12.8946 5.20254 13.4999C4.39035 13.8011 3.64824 14.1728 3.08897 14.6118C2.56507 15.0229 2 15.6557 2 16.5H4ZM13 7.05501C13 8.05565 12.1063 9 11 9V11C13.2074 11 15 9.16361 15 7.05501H13ZM11 9C9.89374 9 9 8.05565 9 7.05501H7C7 9.16361 8.79255 11 11 11V9ZM9 7.05501C9 6.00718 9.93986 5 11 5V3C8.74643 3 7 4.99361 7 7.05501H9ZM11 5C12.0601 5 13 6.00718 13 7.05501H15C15 4.99361 13.2536 3 11 3V5ZM21 15.5H18.3V17.5H21V15.5ZM18.3 15.5H15.6V17.5H18.3V15.5ZM19.3 19.1999V16.5H17.3V19.1999H19.3ZM19.3 16.5V13.7999H17.3V16.5H19.3ZM13.6123 18.8248C12.8262 18.9376 11.952 19 11 19V21C12.0382 21 13.0079 20.932 13.8964 20.8045L13.6123 18.8248ZM11 14.5C11.6077 14.5 12.251 14.5342 12.8957 14.6017L13.1043 12.6126C12.3936 12.5381 11.6807 12.5 11 12.5V14.5Z" fill="white" />
                        </svg>
                      </div>
                      <span className='accordians-header'>Heading</span>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordians-inned-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 featuresmanlapback-div">
              <img src={featuresmanwithlaptopanimat1} className="img-fluid featuresmanwithlaptopanimat1" alt="Responsive image" />
              <img src={featuresmanwithlaptop} className="img-fluid" alt="Responsive image" />
              <img src={featuresmanlapback} className="img-fluid featuresmanlapback" alt="Responsive image" />
              <img src={featuresmanwithlaptopanimat2} className="img-fluid featuresmanwithlaptopanimat2" alt="Responsive image" />
            </div>
          </div>
        </div>
        <div className='container-fluid frequently-backround-block'>
        <img src={featuresfrequentlybac4} className="img-fluid featuresfrequentlybac4" alt="Responsive image" /> 
        <img src={featuresfrequentlybac3} className="img-fluid featuresfrequentlybac3" alt="Responsive image" /> 
            <img src={featuresfrequentlybac1} className="img-fluid featuresfrequentlybac1" alt="Responsive image" /> 
            <img src={featuresfrequentlybac2} className="img-fluid featuresfrequentlybac2" alt="Responsive image" /> 
          <div className='row justify-content-center'>
            <div className='col-12'>
              <span className='free-trial-con-header benefits-header mt-4 mb-3'>Frequently Asked Questions</span>
            </div>
          </div>
          <div className='row expand-main-div d-flex flex-row-reverse mb-4'>
            <div className='expand-toggle-div'>
              <span className='expand-toggle-div-span'>Expand all</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M7 15.5L12.0008 20.08L17 15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 9.08344L12.0008 4.5L17 9.08344" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='col-12 mt-4'>
              
              <div className="accordion features-accordian-2 accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      # Is there a way to streamline user provisioning for better efficiency and productivity?
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
              <div className='row justify-content-center col align-self-center mt-4'>
                <span className='features-cont-span'>Still have unanswered questions ? <a className='features-cont-links' href='#'>Contact us</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features;