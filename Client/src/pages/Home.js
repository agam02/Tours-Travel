import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return <>
    {/*==========Hero section start==========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
              <p> Traveling provides a unique opportunity to create lasting memories and experiences. Whether you're exploring new cultures, trying new foods, or discovering breathtaking landscapes, each journey has the potential to leave a lasting impression.</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    {/*==========Hero section end==========*/}


    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>We offer out best sevieces</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

  {/* =============featured tour section start*/}


  <section> 
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'} />
          <h2 className='featured__tour-title'>Our Featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>

  {/* =============featured tour section end =============*/}

  {/* =============Experience section start =============*/}

<section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience__content">
          <Subtitle subtitle={'Experience'}/>
          <h2>With out all experience <br/> we will serve you</h2>
          <p>"Experience excellence like never before! Our commitment is to serve you with unparalleled dedication and a passion for exceeding expectations. Join us on a journey where every moment is crafted to deliver the utmost satisfaction.<br/> Your satisfaction is not just our goal; it's our promise." </p>
        </div>

        <div className="counter__wrapper d-flex align-items-center gap-5">
          <div className="counter__box">
            <span>0</span>
            <h6>Successful trip</h6>
          </div>

          <div className="counter__box">
            <span>4</span>
            <h6>Regular Clients</h6>
          </div>

          <div className="counter__box">
            <span>1</span>
            <h6>Years experience</h6>
          </div>

        </div>

      </Col>
      <Col lg='6'>
<div className="experience__img">
  <img src={experienceImg} alt="" />
</div>
      </Col>
    </Row>
  </Container>
</section>

  {/* =============Experience section end =============*/}


  {/* =============Gallery section start =============*/}


  <section>
    <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
    </Container>
  </section>

  
  {/* =============Gallery section end =============*/}





  {/* =============testimonial section start =============*/}

<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className='testimonia__title'>What our fans say about us</h2>
      </Col>
      <Col lg='12'>
        <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>
<Newsletter/>
  {/* =============testimonial section end =============*/}












  </>



}

export default Home
