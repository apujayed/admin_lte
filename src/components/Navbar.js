import React, { useState, useContext ,useEffect} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu';
// import "../css/Navbar.css"
import { UserContext } from './UserContext'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UserIcon =`height:10px;
width:5px`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Navbar = (props) => {

    const [sidebar, setSidebar] = useState(true);
    const [subnav, setSubnav] = useState("");
    const { value, setValue } = useContext(UserContext)
    const {isMobile ,setIsMobile} = useContext(UserContext)

    const showSidebar = () => {
        setSidebar(!sidebar)
        setValue(!value)
        // console.log(value)

    }
    useEffect(() => {
      if(isMobile==true){
        setSidebar(false)
        setValue(false)
        setIsMobile(false)
       
      }
  
    })
    console.log(subnav);
    return (
        <>
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <aside className="main-sidebar">
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
    {/* Sidebar user panel */}
    <div className="user-panel">
      <div className="pull-left image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
      </div>
      <div className="pull-left info">
        <p>Alexander Pierce</p>
        <a href="#"><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
    {/* search form */}
 
    {/* /.search form */}
    {/* sidebar menu: : style can be found in sidebar.less */}
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
     
      {SidebarData.map((item, index) => {
                        return (
                            <SubMenu item={item}
                                key={index}
                                clicked={() => {item.subNav && subnav===""? setSubnav(item.id) : setSubnav("")}}
                                subnav={subnav}
                            />
                        )
                    })
                    }

    </ul>
  </section>
  {/* /.sidebar */}
</aside>
           
        </>)
}

export default Navbar;