import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Button, MenuProps } from "antd";
import {Menu} from "antd";
import { HomeOutlined, ContactsOutlined, ProjectOutlined, RadarChartOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';


const navItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Skills',
    key: 'skills',
    icon: <RadarChartOutlined />,
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <ProjectOutlined />,
  },
  {
    label: 'About',
    key: 'about',
    icon: <ContactsOutlined />,
  }
]


const Navbar: React.FC = () => {
  const [current,setCurrent] = useState('home');
  const navigate = useNavigate();

  const [menuWidth, setMenuWidth] = useState('3rem');

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    collapsed?setMenuWidth('8rem'):setMenuWidth('3rem');
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`)
    setCurrent(e.key)
  };

  return (
    <div>
<Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 4 }}>
    {collapsed ? <RightOutlined /> : <LeftOutlined />}
</Button>
<Menu 
  style={{width:menuWidth,borderRadius:'12px'}}
  onClick={onClick} 
  selectedKeys={[current]} 
  mode='inline' 
  inlineCollapsed={collapsed}
  items={navItems}
/>
</div>
)}

export default Navbar;