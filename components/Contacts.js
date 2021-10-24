import React, {useEffect} from 'react';
import { Container, Row, Col } from "reactstrap";
import AOS from 'aos';

const Conatacts = ({ru}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <section className="section mt-lg-10" id="contacts">
             <Container className='ContactsContainer'>
 
             <div className="title text-center mb-5 " data-aos={"zoom-out"}>
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">{ru ? 'Контакты' : 'Contacts'}</span>
              </h3>
            </div>
      <Row className='ContactsRow'>
        <Col lg="7" className='text-center align-items-center'  data-aos={"fade-right"}>
          <div
            id="map-container"
            className="text-center map-container mb-5 mt-2 mx-auto"
            style={{ height: "90%", width: '70%', borderRadius: 10 }}
          >
            
            <iframe className='contactsMap shadow'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.614393552673!2d44.76853041556744!3d48.789251513526594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41054cf1aabe8835%3A0xcb0c1aecca44045f!2z0YPQuy4g0JzQsNGI0LjQvdC-0YHRgtGA0L7QuNGC0LXQu9C10LksIDHQkCwg0JLQvtC70LbRgdC60LjQuSwg0JLQvtC70LPQvtCz0YDQsNC00YHQutCw0Y8g0L7QsdC7LiwgNDA0MTIx!5e0!3m2!1sru!2sru!4v1634947073240!5m2!1sru!2sru"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="8"
              style={{ borderRadius: 10 }}
            />
          </div>
          
          
        </Col>
        <Col  data-aos={"fade-left"}>
          {ru ?  <Row>
            <h6 className="text-dark mb-3 ">Адрес:</h6>
                <p className="text-muted f-14">ул. Машиностроителей, ул. Волжский, 1А, Волгоградская область, 404121</p>
                <div className='bbb1'></div>
                <h6 className="text-muted ">Почта: muslim5700@gmail.com</h6>
                <div className='bbb1' ></div>
                <h6 className="text-muted ">Телефон: +7 918-177-60-25</h6>
                <div className='bbb1'></div>
            </Row> 
            :
            <Row>
            <h6 className="text-dark mb-3 mt-5">Our Address:</h6>
                <p className="text-muted f-14">st. Mashinostroiteley, 1A Volzhsky, Volgograd region, 404121</p>
                <div className='bbb1'></div>
                <h6 className="text-muted ">Email: muslim5700@gmail.com</h6>
                <div className='bbb1' ></div>
                <h6 className="text-muted ">Phone: +7 918-177-60-25</h6>
                <div className='bbb1'></div>
            </Row> }
            <Row className="mt-2  text-left social-buttons mb-0">
        <ul className="list-unstyled footer-social-list mt-2 mb-0 ">
                  <li className="list-inline-item"><a href="tg://resolve?domain=AntonNal"><i className="mdi mdi-telegram" onClick={()=> console.log('aaaaa')}></i></a></li>
                  <li className="list-inline-item"><a href="https://wa.me/79181776025 "><i className="mdi mdi-whatsapp"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.facebook.com/anton.nalivayko.12"><i className="mdi mdi-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="https://vk.com/id198166746"><i className="mdi mdi-googleplus"></i></a></li>
                  <li className="list-inline-item"><a href="#"><i className="mdi mdi-linkedin"></i></a></li>
                  <li className="list-inline-item"><a href="skype:live:.cid.7804f0cd385d45bb?chat"><i className="mdi mdi-skype"></i></a></li>
                  <li className="list-inline-item"><a href="https://github.com/AntonNalivayko"><i className="mdi mdi-github"></i></a></li>
                </ul>
          </Row>
        </Col>
      </Row>
    </Container>
    </section>
    
    )
}

export default Conatacts;


