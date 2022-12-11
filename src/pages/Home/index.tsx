import React from 'react';
import { Button, Row, Typography } from 'antd';

const gradientText = {
  backgroundImage:'linear-gradient(45deg,#ff4444,#ffaaaa)',
  MozBackgroundClip:'text',
  WebkitBackgroundClip:'text',
  color:'transparent',}

const HomePage = () => (
      <Row 
        justify='center' 
        align='middle' 
        style={{
          alignItems: 'center',
          textAlign:'center',
          flexDirection:'column',
        }}>
          <Typography.Title level={1}>Hi, I'm <span style={gradientText}>Abdul Hakam</span></Typography.Title>
          <Typography.Title level={2}>I am a Frontend Web Developer</Typography.Title>
          <Button style={{marginTop:'2em',display:'none'}} type="primary">More About Me</Button>
      </Row>
);

export default HomePage;