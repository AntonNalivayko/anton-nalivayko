import React, {useEffect} from "react";
import { Progress, Container, Row, Col } from "reactstrap";
import AOS from 'aos';



const ScillsBox = ({ru, setRu}) => {
 
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  const scills = [
    {
      name: "HTML5/CSS3",
      image: "./images/htmlcss1.png",
      text: "Adaptive, semantic, valid layout.",
      textRu: "Адаптивная, семантическая, валидная верстка.",
      value: 90,
    },
    {
      name: "JavaScript",
      image: "./images/js1.png",
      text: "Good knowledge of javaScript (ES 5, ES 6).",
      textRu: "Хороший уровень знаний javaScript(ES5, ES6).",
      value: 70,
    },
    {
      name: "React",
      image: "./images/react2.jpg",
      text: "Strong knowledge of React and its structure.",
      textRu: "Уверенное знание React и понимание его структуры.",
      value: 80,
    },
    {
      name: "Redux",
      image: "./images/redux1.png",
      text: "Strong knowledge of Redux and understanding of how it works (Flux architecture).",
      textRu: "Уверенное знание Redux  и понимание принципов его работы(Flux архитектуры).",
      value: 70,
    },
  ];

  return (
    <>
      {scills &&
        scills.map((item) => (
          <Row className="align-items-center  mt-5" data-aos={"fade-down"}>
            <Col md={2}>
              <div>
                <img
                  src={item.image}
                  style={{ width: 100, borderRadius: "5px", boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)' }}
                /> 
              </div>
            </Col>
            <Col md={4}>
              <div className="text-left mt-4 blockquote">{ru ? item.textRu:item.text}</div>
            </Col>
            <Col>
              <div>
                <div className="text-center mt-3">{item.value}%</div>
                <Progress className='shadow-sm' animated color="info" value={item.value} style={{height: 15}}/>
              </div>
            </Col>
          </Row>
        ))}
    </>
  );
};

const ScillsList = ({ru, setRu}) => {
  return (
    <section className="section" id="scills" style={{background: '#f9f9f9', boxShadow: '0px 0px 23px 2px rgba(34, 60, 80, 0.1)'}}>
      <Container style={{width: '89%'}}>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5 m-auto"  data-aos={"zoom-out"}>
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">{ru ? 'Мой скилл' : 'My Scills'}</span>
              </h3>
            </div>
          </Col>
        </Row>
        <ScillsBox ru={ru} setRu={setRu}/>
      </Container>
    </section>
  );
};

export default ScillsList;
