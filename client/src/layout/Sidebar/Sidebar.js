import React from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        <div className="sidebar-item d-flex align-items-center justify-content-between">
          <span>Add Team</span>
          <span>
            <i className="fas fa-plus"></i>
          </span>
        </div>
        <div onClick={() => history.push('/teams')} className="sidebar-item d-flex align-items-center justify-content-between">
          <span>Teams</span>
          <span>
            <PeopleOutlineIcon />
          </span>
        </div>
        <div className="sidebar-item d-flex align-items-center justify-content-between">
          <span>Apps</span>
          <span>
            <i class="fas fa-code-branch"></i>
          </span>
        </div>
        <div className="sidebar-item d-flex align-items-center justify-content-between">
          <span>Notes</span>
          <span>
            <i className="far fa-sticky-note"></i>
          </span>
        </div>
      </div>
      <div className="sidebar-logout d-flex align-items-center justify-content-between">
        <span>Logout</span>
        <span>
          <i className="fas fa-sign-out-alt"></i>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
