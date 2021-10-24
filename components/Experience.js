import React, {useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from 'aos';

const ExperiencesBox = ({experiences, ru, setRu }) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div>
      {experiences.map((feature, key) =>
       
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-1"
            }
            // style={{ boxShadow: '0px 4px 15px -3px rgba(34, 60, 80, 0.19)'}}
          >
            <Col md={5}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto"
                  style={{width: '40%', borderRadius: 10}}
                  data-aos={"fade-left"}
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
                <p className="text-muted mb-3 f-15 more-text">{ru ? feature.descRu : feature.desc}</p>
                {feature.link !== '' && <a href={feature.link} className="hover-2">
                {ru ? 'Читать подробнее о': 'Read More'} {feature.name} <span className="right-icon ml-2">&#8594;</span>
                </a>}
              </div>
            </Col>
            <Row className="align-items-center mt-1">
              <div className='bbb'></div>
            </Row>
            
          </Row>
      
      )}
    </div>
  );
};


const Experience = ({ru, setRu}) => {

  const experiences = [
    {
      id: 1,
      name: 'React hooks',
      img: "./images/hooks.png",
      title: "Components React and Hooks",
      titleRu: 'Компоненты React и React Hooks',
      desc: "Good understanding of the component approach and data transfer between them. I know the main part of React Hooks very well I write code only in Hooks (class components in the past);",
      descRu: "Хорошее понимание компонентного подхода и передачи данных между ними. Достаточно хорошо знаю основную часть React Hooks. Пишу код только на функциональных компонентах с применением Хуков, потому как компоненты класса в не далеком прошлом.",
      link: "https://ru.reactjs.org/docs/hooks-intro.html#motivation",
    },
    {
      id: 2,
      img: "./images/api.jpg ",
      title: "Rest API",
      titleRu: "Rest API",
      desc: "Worked with API (Get, post, delete. receiving, sending and deleting data on the backend). I think this is one of the main skills of a front-end developer. I have enough experience in working with API.",
      descRu: "Работал с API (Get, post, delete. получение, отправка и удаление данных на бэкэнде). Считаю это одним из основных навыков фронтенд-разработчика. Имею достаточный опыт работы с API.",
      link: "",
    },
    {
      id: 3,
      img: "./images/auth.png",
      title: "Authorization React + Redux",
      titleRu: "Авторизация React + Redux",
      desc: "I have experience in creating authorization, registering using react + redax and using localStorage, backend => django (python). Worked with access and refresh tokens.",
      descRu: "Есть опыт создания авторизации, регистрации с помощью react + redax и localStorage, backend => django (python). Работал с access и refresh токенами .",
      link: "",
    },
    {
      id: 4,
      img: "./images/popup.png",
      title: "Popups:)",
      titleRu: "Popups:)",
      desc: "There is experience in creating modal windows, pop-ups, questionnaires.I did them like using bootstrap, material-ui and just javaScript.",
      descRu: "Есть опыт создания модальных окон, всплывающих окон, опросников, делал их с использованием таких библиотек как bootstrap, material-ui и просто javaScript.",
      link: "",
    },
    {
      id: 5,
      img: "./images/validate.png",
      title: "Form validate",
      titleRu: "Настройка валидации форм",
      desc: "I have extensive experience in setting up form validation, both with the use of plugins like Formik + Yup, and ordinary standard forms.",
      descRu: "Имею не малый опыт настройки проверки(валидации) форм, как с использованием плагинов вроде Formik + Yup, так и обычных стандартных форм.",
      link: "",
    },
    {
      id: 6,
      name: 'Google APIs',
      img: "./images/GoogleAPI.jpg",
      title: "Google APIs",
      titleRu: "Google APIs",
      desc: "Experience with Google APIs. Worked with several sections: Maps JavaScript API, Geocoding API, Places API. There is also a Google APIs and Google Developers account.",
      descRu: "Так же работал с API Google. Работал с несколькими разделами: Maps JavaScript API, Geocoding API, Places API. Существует также учетная запись Google API и Google Developers.",
      link: "https://cloud.google.com/apis/docs/overview",
    },
    {
      id: 7,
      name: 'Stripe',
      img: "./images/stripe2.png",
      title: "Payment setup",
      titleRu: "Payment setup",
      desc: "I have experience in integrating and configuring Stripe payment system in terms of Front End development.",
      descRu: "Имею опыт интеграции и настройки платежной системы Stripe в Front End части вэб приложений.",
      link: "https://stripe.com/",
    },
    {
      id: 8,
      img: "./images/git.png",
      title: "Work with Git",
      titleRu: "Работа с Git",
      desc: "I also have good skills in working with GitHub, I have my own repository. I also have a lot of experience with Gitlab.",
      descRu: "Также имею хорошие навыки работы с GitHub, есть собственный репозиторий. Так же есть опыт работы Gitlab.",
      link: "",
    },
  ];
  return (
    <section className="section" id="experience" >
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5" data-aos={"zoom-out"} >
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">{ru ? 'МОЙ ОПЫТ' : 'My Experience'}</span>
              </h3>
            </div>
          </Col>
        </Row>
        <ExperiencesBox experiences={experiences} ru={ru} setRu={setRu} />
        <Row className="text-center" data-aos={"zoom-in"}>
        <p className="text-muted mb-3 f-15 font-weight-bold block-title" >{ru ? 'А так же:' : 'And also:'}</p>
          </Row>
        <Row className="justify-content-center" data-aos={"zoom-in"} >
          <img src='./images/vs1.png' style={{width: 80, height: 55, marginTop: 10}}/> 
          <img src='./images/mui.png' style={{width: 70, height: 50, marginTop: 10}} /> 
          <img src='./images/strap.png' style={{width: 75, height: 50, marginTop: 10}}/> 
          <img src='./images/chackra.png' style={{width: 160, height: 35, marginTop: 10}}/> 
          <img src='./images/figma2.png' style={{width: 75, height:50, marginTop: 10}}/> 
          <img src='./images/ps.png' style={{width: 75, height: 50, marginTop: 10}}/> 
          <img src='./images/next.png' style={{width: 130, height: 60, marginTop: 10}}/> 
          <img src='./images/youtrack.png' style={{width: 150, height: 55, marginTop: 10}}/> 
        </Row>
      </Container>
    </section>
  );
};
export default Experience;