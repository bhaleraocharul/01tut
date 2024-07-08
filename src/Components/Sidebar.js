import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "94vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/">
              <CDBSidebarMenuItem icon="columns">Smile Geni</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables">
              <CDBSidebarMenuItem icon="table">3D Face</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile">
              <CDBSidebarMenuItem icon="user">
                Treatment Plan
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics">
              <CDBSidebarMenuItem icon="chart-line">
                Send Feedback
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Terms & Conditions
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
