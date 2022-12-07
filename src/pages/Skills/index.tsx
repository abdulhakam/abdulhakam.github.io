import { Col, Row, Typography } from "antd";
import React from "react"
import Skill from "./Skill";

const Skills: React.FC = () => (
  <Row justify='space-around' align='middle' style={{height: '100vh',flexFlow: 'column'}}>
    <Col style={{width:'100%',}}><Typography.Title style={{display:'flex',justifyContent:'center'}} level={1}> My Skills </Typography.Title></Col>
    <Row justify='space-around'>
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Languages</Typography.Title>
      <Skill >
        <img width={128} src={require("../../assets/images/html.png")} alt=""/>HTML</Skill>
      <Skill >
        <img width={128} src={require("../../assets/images/css3.png")} alt=""/>CSS</Skill>
      <Skill >
        <img width={128} src={require("../../assets/images/js.png")} alt=""/> Javascript</Skill>
      <Skill >
        <img width={128} src={require("../../assets/images/ts.png")} alt=""/>Typescript</Skill>
        
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Frameworks/ Libraries</Typography.Title>
      <Skill >
        <img width={128} src="../../assets/images/react.png" alt=""/>ReactJS</Skill>
      <Skill >
        {/*<img src="../../assets/images/" alt=""/>*/}Material UI</Skill>
      <Skill >
        <img width={128} src={require("../../assets/images/bootstrap.png")} alt=""/>Bootstrap</Skill>
    </Row>
  </Row>
)

export default Skills;