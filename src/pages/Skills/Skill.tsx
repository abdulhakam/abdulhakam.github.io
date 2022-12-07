import { Col, Typography } from "antd";

export default function Skill(props : any) {
  return (
  <Col span={4}>
    <Typography.Title level={3}>{props.children}</Typography.Title>
  </Col>
)}