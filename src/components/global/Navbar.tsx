import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuProps } from "antd";
import { Menu } from "antd";
import {
  HomeOutlined,
  ContactsOutlined,
  ProjectOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

const navItems: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Skills",
    key: "skills",
    icon: <RadarChartOutlined />,
  },
  {
    label: "Projects",
    key: "projects",
    icon: <ProjectOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <ContactsOutlined />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        style={{ width: "3rem", borderRadius: "12px" }}
        onClick={onClick}
        selectedKeys={[current]}
        mode='inline'
        inlineCollapsed={true}
        items={navItems}
      />
    </div>
  );
};

export default Navbar;
