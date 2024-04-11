import React from "react";
import SideBar from "../Sidebar/Sidebar";
import Content from "../component/content";
import Table from "../component/table";
import Footer from "../footer/footer";

import "./main.css";
const Main = () => {
  return (
    <>
      {/* <div className="main">
        <div className="container">

          <div className="SideBar">
            <SideBar />
          </div>

          <div className="Right-Container">
            <div className="R">
              <Content />
            </div>
          </div>
          <div className="Left-Container">
            
          </div>
          
        </div>
      </div> */}

      <div className="main">
        <div className="SideBar">
          <SideBar />
        </div>
        <div className="con">
          <Content />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
