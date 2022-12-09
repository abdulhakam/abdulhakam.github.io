import { Col, Row, Typography } from "antd";
import React from "react";

const Projects: React.FC = () => (
  <Row 
  justify='center' 
  align='middle' 
  style={{
    height:'100vh',
    alignItems: 'center',
    textAlign:'center',
    flexDirection:'column',
  }}>
    <div id='projects-site'></div>
    <Typography.Title level={1}>My Projects</Typography.Title>
    <Row
    style={{
      flexDirection: 'row',
      width: '100%',
    }}>
      <Col span={6}><a href='https://abdul-hakam.web.app/projects/themealdb/'><Typography.Title level={3}>Bites</Typography.Title></a></Col>
      <Col span={6}><a href='https://the-clone-tmdb.netlify.app/'><Typography.Title level={3}>The Clone</Typography.Title></a></Col>
    </Row>
  </Row>
)

export default Projects;