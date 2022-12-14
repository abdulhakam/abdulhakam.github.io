import { Col, Row, Typography } from "antd";
import React from "react";
import { ReactComponent as HTMLlogo } from "../../assets/images/html.svg";
import { ReactComponent as CSSlogo } from "../../assets/images/css-3.svg";
import { ReactComponent as JSlogo } from "../../assets/images/logo-js.svg";
import { ReactComponent as TSlogo } from "../../assets/images/typescript.svg";
import { ReactComponent as Reactlogo } from "../../assets/images/react.svg";
import { ReactComponent as Muilogo } from "../../assets/images/mui.svg";
import { ReactComponent as BS5logo } from "../../assets/images/bootstrap5.svg";
import { motion } from "framer-motion";

const Skills: React.FC = () => (
  <motion.div
    style={{height:'100%'}}
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.15 }}
  >
    <Row justify='space-around' align='middle' style={{ height: "100%",}}>
      <Col span={24}>
        <Typography.Title style={{ display: "flex", justifyContent: "center" }} level={1}>
          My Skills
        </Typography.Title>
      </Col>
      <Row justify='space-around'>
        <Typography.Title style={{ display: "block", width: "100%" }} level={2}>
          Languages
        </Typography.Title>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <HTMLlogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            HTML
          </Typography.Title>
        </Col>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <CSSlogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            CSS
          </Typography.Title>
        </Col>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <JSlogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            Javascript
          </Typography.Title>
        </Col>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <TSlogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            Typescript
          </Typography.Title>
        </Col>

        <Typography.Title style={{ display: "block", width: "100%" }} level={2}>
          Frameworks/ Libraries
        </Typography.Title>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <Reactlogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            ReactJS
          </Typography.Title>
        </Col>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <Muilogo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            Material UI
          </Typography.Title>
        </Col>
        <Col xs={12} sm={8} md={6} style={{ display: "flex",flexDirection:'column', justifyContent: "center" }}>
          <BS5logo width={100} height={100} style={{margin:'auto'}} />
          <Typography.Title level={3} style={{ display: "flex", justifyContent: "center" }}>
            Bootstrap
          </Typography.Title>
        </Col>
      </Row>
    </Row>
  </motion.div>
);

export default Skills;
