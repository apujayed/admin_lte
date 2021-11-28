import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #b8c7ce;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5px 12px 15px;
  list-style: none;
  height: 44px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color:white;
    background: #252831;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 0px;
  
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 44px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
transition:800ms;
  &:hover {
    background: ##8aa4af;
    text-color:white !important;
    cursor: pointer;
  }
`;

const SubMenu = ({ item, subnav }) => {
  // const [subnav, setSubnav] = useState("");

  // const showSubnav = (id) => 
  // console.log(subnav);

  return (
    <>
     
      <li>
        <a href="pages/widgets.html">
          <i className="fa fa-th" /> <span>{item.title}</span>
          <span className="pull-right-container">
            <small className="label pull-right bg-green">new</small>
          </span>
        </a>
      </li>
     
      
      {subnav===item.id &&
        item.subNav.map((item, index) => {
          return (
            <li class="treeview">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Charts</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="pages/charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
            <li><a href="pages/charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
            <li><a href="pages/charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
            <li><a href="pages/charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
          </ul>
        </li>
          );
        })}
    </>
  );
};

export default SubMenu;