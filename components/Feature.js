import React, {useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from 'aos';

const FeatureBox = ({features, ru, setRu}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div>
      {features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-0"
            }
          >
            <Col md={5}>
              <div data-aos={"fade-left"}>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                  style={{ width: "70%" }}
                />
              </div>
            </Col>
            <Col md={{ size: 6, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4" data-aos={"fade-left"}>
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3 text-title">
                  {ru ? feature.titleRu : feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{ru ? feature.descRu : feature.desc}</p>
                {feature.link !== '' &&<a href={feature.link} className="hover-2">
                  {ru ? 'Читать подробнее': 'Read More'} <span className="right-icon ml-2">&#8594;</span>
                </a>}
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-0">
            <Col md={6} className='order-last order-lg-first'>
              <div className="mb-4" data-aos={"fade-right"}>
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3 text-title">
                {ru ? feature.titleRu : feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{ru ? feature.descRu : feature.desc}</p>
               {feature.link !== '' && <a href={feature.link} className="f-16 text-warning">
                  Read More <span className="right-icon ml-2">&#8594;</span>
                </a>}
              </div>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="mt-5 mt-sm-0 order-first order-lg-last">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                  style={{ width: "70%" }}
                  data-aos={"fade-left"}
                />
              </div>
            </Col>
          </Row>
        )
      )}
    </div>
  );
};
const Feature = ({ru, setRu}) => {
  const features = [
    {
      id: 1,
      img: "./images/html1.jpg",
      title: "Html and CSS",
      titleRu: "Html и CSS",
      desc: "Using HTML5 and CSS3 provides advantages to businesses that develop and deploy web content and web applications, to create refined and accurate web pages and web systems that operate across devices, operating systems and web browsers. Write once, run anywhere.  The plethora of devices, operating systems and screen sizes present numerous design, functional and layout considerations and problems if standards are not adhered to.",
      descRu: 'Использование HTML5 и CSS3 дает преимущества компаниям, которые разрабатывают и развертывают веб-контент и веб-приложения, для создания усовершенствованных и точных веб-страниц и веб-систем, которые работают на разных устройствах, операционных системах и веб-браузерах. Пиши один раз, беги куда угодно. Множество устройств, операционных систем и размеров экранов создают многочисленные конструктивные, функциональные и компоновочные особенности и проблемы, если не соблюдаются стандарты.',
      link: "",
    },
    {
      id: 2,
      img: "./images/js1.jpg ",
      title: "Java Script",
      titleRu:"Java Script",
      desc: "Java Script is a Dynamic Scripting language used along with HTML. It is an interpreted language that is used to add dynamics content in web pages. Being client-side, JavaScript is very fast because any code functions can be run immediately instead of having to contact the server and wait for an answer. It can be directly used in any webrowser and even non browser environments.",
      descRu:'Java Script - это язык динамических сценариев, используемый вместе с HTML. Это интерпретируемый язык, который используется для добавления динамического содержимого на веб-страницы. Будучи клиентским, JavaScript работает очень быстро, потому что любые функции кода можно запускать немедленно, вместо того, чтобы связываться с сервером и ждать ответа. Его можно напрямую использовать в любом веб-браузере и даже в средах без браузера.',
      link: "",
    },
    {
      id: 3,
      img: "./images/reactimg.jpg",
      title: "React or React + Redux",
      titleRu:"React или React + Redux",
      desc: "React is great, and it’s entirely possible to write a complete application using nothing but React. However, as an application gets more complex, sometimes it’s not as straightforward to use plain old React. Using a state management library like Redux can alleviate some of the issues that crop up in more complex applications.",
      descRu: "React великолепен, и вполне возможно написать полное приложение, используя только React. Однако по мере того, как приложение становится более сложным, иногда становится все труднее использовать старый добрый React. Использование библиотеки управления состоянием, такой как Redux, может облегчить некоторые проблемы, возникающие в более сложных приложениях.",
      link: "https://www.newline.co/fullstack-react/articles/redux-with-mark-erikson/",
    },
  ];
  return (
    <section className="section mt-lg-10" id="feature" >
      <Container>
        <Row className="justify-content-center ">
          <Col lg={6} md={8}>
            {ru ? <div className="title text-center mb-5 " data-aos={"zoom-out"}>
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">Стек разработки</span>
              </h3>
              <p className="text-muted">
                  Стек технологий, выбранный разработчиком, определяет
                  производительность, требования к аппаратным ресурсам,
                  надежность программного обеспечения. Подробнее о моем стеке:
              </p>
            </div>
            :
            <div className="title text-center mb-5 " data-aos={"zoom-out"}>
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">Stack of technologies</span>
              </h3>
              <p className="text-muted">
                The technology stack chosen by the developer determines the
                performance, the requirements for hardware resources, the
                reliability of the software. More about for my stack:
              </p>
            </div>}
          </Col>
        </Row>
        <FeatureBox features={features} ru={ru} setRu={setRu} />
      </Container>
    </section>
  );
};
export default Feature;
