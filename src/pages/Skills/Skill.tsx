import { Col, Typography, Image } from "antd";

export default function Skill(props : any) {
  return (
  <Col span={6}>
    <Typography.Title level={3}>{props.children}</Typography.Title>
  </Col>
)}