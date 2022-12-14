import { Col, Divider, Row, Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Githublogo } from "../../assets/images/github.svg";
import { ReactComponent as LinkedInlogo } from "../../assets/images/linkedin.svg";

const { Title } = Typography;

const aboutMe = {
  name: "Abdul Hakam",
  email: "zehas.11@gmail.com",
  languages: "English, Urdu",
};

const About: React.FC = () => {
  // get theme from store
  const theme = useSelector((state: any) => state.theme);
  function ghLogoColor(){return theme.darkTheme? '100%' : '0%' ;}
  return (
    <motion.div
      style={{ height: "100%" }}
      className='container text-center  bg-black'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <Row style={{ height: "100%", marginRight: "2rem", marginLeft: "2rem" }}>
        <Col span={24}>
          <Title style={{ display: "flex", width: "100%", justifyContent: "center" }} level={1}>
            About Me
          </Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <Divider orientation='left'>Name:</Divider>
          <Title level={4} style={{ marginLeft: "3rem" }}>
            {aboutMe.name}
          </Title>
          <Divider orientation='left'>email:</Divider>
          <Title level={4} style={{ marginLeft: "3rem" }}>
            {aboutMe.email}
          </Title>
          <Divider orientation='left'>Languages:</Divider>
          <Title level={4} style={{ marginLeft: "3rem" }}>
            {aboutMe.languages}
          </Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}>
          <Divider orientation='left'>I'm on:</Divider>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href='https://github.com/abdulhakam/'>
              <Githublogo width={64} height={64} style={{ filter: `invert(${ghLogoColor()})`, margin: "1rem" }} />
            </a>
            <a href='https://www.linkedin.com/in/abdul-hakam-bhatti-a62634252/'>
              <LinkedInlogo width={64} height={64} style={{ margin: "1rem" }} />
            </a>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};
export default About;
