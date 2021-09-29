import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import menshops from "../../Assets/Projects/menshops.png";
// import gamburgeruz from "../../Assets/Projects/hamburger.png";
// import portf from "../../Assets/Projects/portfo.png";

class Projects extends Component {
  state = {
    date: [],
    isLoaded: false
  }
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((date) => console.log(date))
    try {
      const response = await fetch('http://localhost:7007/projects')
      const data = await response.json()
      console.log(data);
      this.setState({ data: data.splice(0, 10), isLoaded: true })
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log('render working...');
    const { data, isLoaded } = this.state;
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Мои последние <strong className="purple">работы </strong>
          </h1>
          <p style={{ color: "white" }}>
            Вот несколько проектов, над которыми я работал в последнее время.
          </p>
          {!isLoaded ? <div>Loading...</div> :
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {data.map((item) => {
                return (
                  <Col key={item.id} md={4} className="project-card">
                    <ProjectCard
                      imgPath={item.img}
                      isBlog={false}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  </Col>
                )
              })}
            </Row>
          }

        </Container>
      </Container>
    )
  }
}
export default Projects;
