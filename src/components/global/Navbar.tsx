import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import type { MenuProps } from "antd";
import {Menu} from "antd";


const navItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'Skills',
    key: 'skills',
  },
  {
    label: 'Projects',
    key: 'projects',
  },
  {
    label: 'About',
    key: 'about',
  }
]


const Navbar: React.FC = () => {
  const [current,setCurrent] = useState('home');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`)
    setCurrent(e.key)
  };

  return (
    <Menu 
      style={{}}
      onClick={onClick} 
      selectedKeys={[current]} 
      mode='horizontal' 
      items={navItems}/>
      )
}

export default Navbar;