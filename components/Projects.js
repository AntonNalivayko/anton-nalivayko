import React, {useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import AOS from 'aos';


const ProjectsBox = ({projects, ru, setRu}) => {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);
    return (
      <div>
        {projects.map((feature, key) =>
            <Row
              key={key}
              className={
                feature.id === 1
                  ? "align-items-center"
                  : "align-items-center mt-5"  
              }
              data-aos={"zoom-out"}
            >
             
              <Col md={{ size: 6, offset: 1 }}>
                <div className="mt-5 mt-sm-0 mb-4">
                  <div className="my-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-dark font-weight-normal mb-3 pt-3">
                    {ru ? feature.titleRu : feature.title}
                  </h3>
                  <p className="text-muted mb-3 f-15">{ru ? feature.descRu :feature.desc}</p>
                  {feature.link !== '' && <a href={feature.link} className="hover-2">
                  {ru ? 'Ознакомиться с проектом': 'More about project'} <span className="right-icon ml-2">&#8594;</span>
                  </a>}
                </div>
              </Col>
              <Col md={5}>
                <div>
                  <img
                    src={feature.img}
                    alt=""
                    className="img-fluid d-block mx-auto"
                    style={{width: '70%', borderRadius: 15}}
                  />
                </div>
              </Col>
            </Row>
        )}
      </div>
    );
  };


const Projects = ({ru, setRu}) => {
    const projects = [
        {
          id: 1,
          img: "./images/yabloko.jpg",
          title: "ЯБЛОКО",
          titleRu: "ЯБЛОКО",
          desc: "Participated in the development of frontend new sections and modules of the ERP admin system, using the React-Redux stack. I also had experience with Material-UI.",
          descRu: "Участвовал в разработке новых разделов и модулей ERP системы, используя стек React-Redux. Так же в работе с этим проектом получил хороший опыт верстки с такой библиотекой как - Material-UI.",
          link: "https://franshiza-yabloko.ru/",
        },
        {
          id: 2,
          img: "./images/MGM-logo.png ",
          title: "MORE GYM MEMBERS",
          titleRu: "MORE GYM MEMBERS",
          desc: "Participated in the development of the frontend of various ERP modules for the ad management admin system, using the React-Redux stack. I also had experience with Сhackra-UI.",
          descRu: "Участвовал в разработке фронтенда различных модулей для системы администрирования и управления рекламой, используя стек React-Redux. Был опыт работы с Сhackra-UI.",
          link: "https://moregymmembers.com/",
        },
        {
          id: 3,
          img: "./images/projects.png",
          title: "Other projects",
          titleRu: "Другие проекты",
          desc: "And several other projects that I can not voice now because of the fact that I signed NDA agreement. These projects used the same development stack as in my other works - React or React + Redux. The projects were of varying complexity and of different types.",
          descRu: "И еще несколько других проектов, которые озвучить не могу. В этих проектах использовался тот же стек разработки, что и в других моих работах - React или React + Redux. Проекты были разной сложности, типа и разной величины.",
          link: "",
        },
      ];
    return (
        <section className="section" id="projects" style={{background: '#f9f9f9', boxShadow: '0px 0px 23px 2px rgba(34, 60, 80, 0.1)'}}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5" data-aos={"zoom-out"}>
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning text-uppercase block-title">{ru ? 'Проекты в которых участвовал' : 'Projects in which I participated'}</span>
              </h3>
            </div>
          </Col>
        </Row>
        <ProjectsBox projects={projects} ru={ru} setRu={setRu} />
      </Container>
    </section>
    )
}

export default Projects;
