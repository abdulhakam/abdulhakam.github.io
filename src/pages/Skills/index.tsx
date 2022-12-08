import { Col, Row, Typography } from "antd";
import React from "react";
import { ReactComponent as HTMLlogo } from '../../assets/images/html.svg'
import { ReactComponent as CSSlogo } from '../../assets/images/css-3.svg'
import { ReactComponent as JSlogo } from '../../assets/images/logo-js.svg'
import { ReactComponent as TSlogo } from '../../assets/images/typescript.svg'
import { ReactComponent as Reactlogo } from '../../assets/images/react.svg';
import { ReactComponent as Muilogo } from '../../assets/images/mui.svg'
import { ReactComponent as BS5logo} from '../../assets/images/bootstrap5.svg'

const Skills: React.FC = () => (
  <Row justify='space-around' align='middle' style={{height: '100vh',flexFlow: 'column'}}>
    <Col style={{width:'100%',}}><Typography.Title style={{display:'flex',justifyContent:'center'}} level={1}> My Skills </Typography.Title></Col>
    <Row justify='space-around'>
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Languages</Typography.Title>
      <Col>
        <HTMLlogo width={100} height={100}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>HTML</Typography.Title></Col>
      <Col >
        <CSSlogo width={100} height={100}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>CSS</Typography.Title></Col>
      <Col >
         <JSlogo width={100} height={100}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>Javascript</Typography.Title></Col>
      <Col >
        <TSlogo width={100} height={100}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>Typescript</Typography.Title></Col>
        
      <Typography.Title style={{display:'block',width:'100%'}} level={2}>Frameworks/ Libraries</Typography.Title>
      <Col >
        <Reactlogo width={128} height={128}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>ReactJS</Typography.Title></Col>
      <Col >
        <Muilogo width={128} height={128}/> <Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>Material UI</Typography.Title></Col>
      <Col >
        <BS5logo width={100} height={100}/><Typography.Title level={3} style={{display:'flex',justifyContent:'center'}}>Bootstrap</Typography.Title></Col>
    </Row>
  </Row>
)

export default Skills;