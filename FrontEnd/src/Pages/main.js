import React from "react";
import SideBar from "../Sidebar/Sidebar";
import Content from "../component/content";
import Table from "../component/table";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="main">
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
            <div className="L">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
