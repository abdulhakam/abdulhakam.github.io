import React from 'react';
import { Button, Row, Typography } from 'antd';
import { motion } from 'framer-motion';

const gradientText = {
  backgroundImage:'linear-gradient(45deg,#ff4444,#ffaaaa)',
  MozBackgroundClip:'text',
  WebkitBackgroundClip:'text',
  color:'transparent',}

const HomePage: React.FC = () => (
  <motion.div
    style={{height:'100%'}}
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    <Row 
      justify='center' 
      align='middle' 
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        flexDirection:'column',
      }}>
        <Typography.Title level={1}>Hi, I'm <span style={gradientText}>Abdul Hakam</span></Typography.Title>
        <Typography.Title level={2}>I am a Frontend Web Developer</Typography.Title>
        <Button style={{marginTop:'2em',display:'none'}} type="primary">More About Me</Button>
    </Row>
  </motion.div>
);

export default HomePage;