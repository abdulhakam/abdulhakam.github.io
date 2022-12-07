import { Col, Row, Typography } from "antd";
import React from "react"
import Skill from "./Skill";
import '../../assets/images/skills/HTML5_logo_and_wordmark.svg';
// import '../../assets/images/skills/CSS3_logo_and_wordmark.svg';
import '../../assets/images/skills/JavaScript-logo.png';
import '../../assets/images/skills/Typescript.svg';
import '../../assets/images/skills/Bootstrap_logo.svg';
import '../../assets/images/skills/material-ui-1.svg';
import '../../assets/images/skills/reactjs.svg'

const Skills: React.FC = () => (
  <Row justify='space-around' align='middle' style={{height: '100vh',flexFlow: 'column'}}>
    <Col style={{width:'100%',}}><Typography.Title style={{display:'flex',justifyContent:'center'}} level={1}> My Skills </Typography.Title></Col>
    <Row justify='space-around'>
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Languages</Typography.Title>
      <Skill >
        <img src="../../assets/images/skills/HTML5_logo_and_wordmark.svg" alt=""/>HTML</Skill>
      <Skill >
        <img src="../../assets/images/skills/CSS3_logo_and_wordmark.svg" alt=""/>CSS</Skill>
      <Skill >
        <img src="../../assets/images/skills/JavaScript-logo.png" alt=""/>Javascript</Skill>
      <Skill >
        <img src="../../assets/images/skills/Typescript.svg" alt=""/>Typescript</Skill>
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Frameworks/ Libraries</Typography.Title>
      <Skill >
        <img src="../../assets/images/skills/reactjs.svg" alt=""/>ReactJS</Skill>
      <Skill >
        <img src="../../assets/images/skills/material-ui-1.svg" alt=""/>Material UI</Skill>
      <Skill >
        <img src="../../assets/images/skills/Bootstrap_logo.svg" alt=""/>Bootstrap</Skill>
    </Row>
  </Row>
)

export default Skills;