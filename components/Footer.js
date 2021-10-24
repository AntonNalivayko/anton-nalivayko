import React from 'react';
import { Container, Row, Col } from "reactstrap";
import {facebook } from '../public/images/facebook.svg'


const Footer = ({ru}) => {
  const links = [
    { id : 1, title : "Scroll to:", titleRu: 'Перейти к:',
      child : [
          { title : "Home", link : "#home" },
          { titleRu : "Главной", link : "#home" },
          { title : "STECK", link : "#feature" },
          { titleRu : "Стеку", link : "#feature" },
          { title : "Scills", link : "#scills" },
          { titleRu : "Скилам", link : "#scills" },
          { title : "Experience", link : "#experience" },
          { titleRu : "Опыту", link : "#experience" },
          { title : "Projects", link : "#projects" },
          { titleRu : "Проектам", link : "#projects" },
          
      ]
    },
  ];

  return (
    <section className="footer section" style={{padding: '30px', background: '#d8d8d8', boxShadow: '0px 0px 23px 2px rgba(34, 60, 80, 0.1)' }}>
      <Container >
        <Row >
          <Col lg={8} className='d-none d-md-none d-lg-block'>
            <Row>
              {
                links.map((link, key) =>
                  <Row key={key} md={6} className='d-flex justify-content-center'>
                    <h6 className="text-dark mb-3 text-uppercase">{ru ? link.titleRu :link.title}</h6>
                    <ul className="list-unstyled d-flex ">
                      {
                        link.child.map((fLink, key) =>
                        <Col>
                          <li key={key} className='mx-3'><a href={fLink.link} className='text-uppercase'>{ru ? fLink.titleRu : fLink.title}</a></li>
                          </Col>
                        )
                      }
                    </ul>
                  </Row>
                )
              }
            </Row>
          </Col>
        </Row>  
          <Row className="text-center align-items-center">
            <div className='text-center'>
                
                <img src='./images/rstrap.png' style={{width: 150}} className="img-responsive center-block m-1"/>
                <img src='./images/next.png' style={{width: 70}} className="img-responsive center-block m-1"/>
                </div>
            </Row>
<Row className="mt-2">
          <Col md={12}>
              <div>

              </div>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">2021 © Anton Nalivayko.</p>
            </div>
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;