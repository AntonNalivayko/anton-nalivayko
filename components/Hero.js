import React, {useEffect} from 'react';
import { Container, Row, Col, Progress, NavLink } from 'reactstrap';
import  {myPhoto}  from '../public/images/my-photo.jpg'
import AOS from 'aos';
import Particles from "react-particles-js";



const Hero = ({ru, setRu}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <section className="section position-relative sect1" id='home'  style={{height: '100vh'}}>
      <Container className='home'>
      <Particles 
        className="particles-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              },
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              },
            },
            number: {
              value: 30
            },
            size: {
              value: 3,
            },
            shape: {type:"circle",
                      stroke:{width:5,
                      color:"#6495ED"}
            },
          }
        }}
        
        />
        <Row className="align-items-center mt-n1 mt-lg-5 mt-xl-5"   >
          <Col lg={6} className='order-last order-sm-last order-lg-first order-md-last order-xl-first' >
            <div className="" data-aos={"fade-right"}>
              {!ru ? 
              <p className="text-uppercase text-mutted font-weight-medium f-14 mb-4 d-none d-lg-block d-xl-block d-xxl-block home-top-text">Welcome to my page!<br/> It is developed with NEXT.js</p> 
              :
              <p className="text-uppercase text-mutted font-weight-medium f-14 mb-4 d-none d-lg-block d-xl-block d-xxl-block home-top-text">Добро пожаловать на мою страницу!<br/> Она разработана на NEXT.js</p>
              }

              {ru ? <h1 className="mb-4 font-weight-normal line-height-1_4 homeTitle mt-5 mt-lg-1 mt-xl-1 mt-xxl-1" >Привет, меня зовут <span className="text-primary font-weight-medium">Антон</span>, я frontend разработчик. </h1> :
              <h1 className="mb-4 font-weight-normal line-height-1_4 homeTitle mt-5 mt-lg-1 mt-xl-3 mt-xxl-5" >Hi, I'm <span className="text-primary font-weight-medium">Anton Nalivayko</span>, frontend developer. </h1>}
              {ru ? <p className="text-muted mb-4 pb-2 homeText"  >Занимаюсь разработкой фронтовой части web SPA и SSR приложений с применением React.js и Next.js. Участвовал в разработке ERP систем и не только. Опыт коммерческой разработки на React.js 8 месяцев.</p>:
              <p className="text-muted mb-4 pb-2 homeText"  >I am developing the front-end web SPA and SSR applications using React.js and Next.js. Participated in the development of ERP systems and not only. Experience in commercial development with React.js for 8 months.</p>}
              {/* <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a> */}
            </div>
            <div className="link_wrapper shadow">
    <a href="#contacts" className='link shadow'>{ru ? 'Мои КОНТАКТЫ' : 'my Contacts'}</a>
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div>
          </Col>
          <Col lg={6} className='mt-4 mt-sm-0 order-first order-sm-first order-lg-last order-md-first order-xl-last'>
            <div className="mt-5 mt-5 mt-lg-0" data-aos={"fade-left"}>
            {/*  */}
              <img src='images/myphoto.png' alt="" className="img-fluid mx-auto d-block shadow" style={{width: '60%', borderRadius: 2}} />
            </div>
          </Col>
          
        </Row>
        <Row className="align-items-center text-center mt-5 d-none d-sm-block d-lg-block d-xl-block d-xxl-block" >
        
          <div class="arrow"  >
        <NavLink href="#feature">
                <span ></span>
                <span ></span>
                <span ></span>
         </NavLink>
         </div>
       </Row>
      </Container>

    </section>
  );
}
export default Hero;