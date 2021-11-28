import React, { useState, useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

import "../App.css";
import { UserContext } from "./UserContext";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const Sidebar = () => {
  const [treeview, setTreeview] = useState("");
  const [mainnav, setMainnav] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const [collapse, setCollapse] = useState("");
  const [subclass, setClass] = useState("treeview menu-open");
  const [subclass2, setClass2] = useState("treeview-menu");

  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false);

  const location = useLocation();

  const getPath = () => {
    setTreeview(location.pathname);
    const newPath = "/" + treeview.split("/")[1];
    const collapse = treeview.split("/")[1];
    setCurrentPath(newPath);
    // setCollapse(collapse);
    // console.log("hi" + currentPath + "bye" + treeview);
  };

  const toggleClass = (props) => {
    // var activeTree = document.getElementById(props)
    // activeTree.classList.toggle("menu-open")
    //  console.log('hisds'+props)
  };

  const enableMain = () => {
    var k = document.getElementsByClassName("menu-open").length;
   
    if (k != 0) {
      var x = document.getElementById(collapse).classList.toggle("menu-open");
      var x = document
        .getElementById(collapse + "1")
        .classList.toggle("submenuclose");
        console.log(collapse +'close');
    } else{
   
    }

    // setTest2(true)

    // setClass("treeview")
    // setClass2("treeview-menu submenuclose ")
    // console.log(subclass)
    // console.log(subclass2)
    // var element = document.querySelector(".treeview.menu-open").id;
    //  var idclass =  document.querySelector('.apu').id
    // //  var element =  document.getElementsByClassName("treeview");
    // element.classList.add("submenuclose");
    // console.log("ss" + element + "tree" + collapse);
    // var activeTree = document.getElementById("activeTree")
    // activeTree.classList.remove("menu-open")
    // var elemment = document.getElementById("treeview")
    // elemment.classList.add("sarea")
  };

  const disableMain = () => {
    var x = document.getElementsByClassName("submenuclose").length;

    if (x != 0) {
      var y = document.getElementById(collapse + "1");
      var k = y.id;
      var y = document.getElementById(k).classList.remove("submenuclose");
      console.log('Expanded '+collapse)
    }
    else{
     console.log('current id'+collapse)
    }

    // console.log('click '+collapse)
  };

  const getLiid = (props) => {
    console.log(props);
  };
  useEffect(() => {
    getPath();
    // disableMain();
    // console.log('this  is   '+collapse)
  });
  return (
    <>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">
            {SidebarData.map((item, index) => {
              return (
                //if sidebar have no s

                item.subNav ? ( //if sidebar have subnav than
                  <li
                  onClick={() => {
                    setCollapse(item.path);
                    disableMain();
                    
                    // console.log("Your Collapse Id " + collapse);
                   
                  }}
                    id={item.path}
                    className={
                      currentPath === item.path
                        ? "treeview menu-open"
                        : " treeview"
                    }
                    key={index}
                  >
                    <a href="#">
                      <i  className="fa fa-pie-chart"></i>
                      <span  >{item.title}</span>
                      <span  className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                      </span>
                    </a>

                    <ul id={item.path + "1"} className="treeview-menu">
                      {item.subNav.map((item, index) => {
                        return (
                          <li
                            className={treeview === item.path ? "active" : ""}
                            key={index}
                          >
                            <Link to={item.path}>
                              <i className="fa fa-circle-o"></i> {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li
                    id=""
                    className={location.pathname === item.path ? "active " : ""}
                    key={index}
                  >
                    <Link to={item.path} onClick={enableMain}>
                      <i className="fa fa-th"></i> <span>{item.title}</span>
                      <span className="pull-right-container">
                        <small className="label pull-right bg-green">new</small>
                      </span>
                    </Link>
                  </li>
                )
              );
            })}

            {/* <li className="header">MAIN NAVIGATION</li> */}
          </ul>
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle"
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>
        </section>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default Sidebar;
