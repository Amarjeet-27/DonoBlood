import React from "react";
// import { userMenu } from "./Menus/userMenu";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
  //GET USER STATE
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Donar</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/create-messagefor-donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/create-messagefor-donar">
                  RequestBloodFromDonars
                </Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/get-messagefrom-hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/get-messagefrom-hospital">
                  NotificationFromHospitals
                </Link>
              </div>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donar-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/donar-list">Donar List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div
              className={`menu-item ${
                location.pathname === "/organisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          )}
          {user?.role === "hospital" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/consumer" && "active"
                }`}
              >
                <i className="fa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/consumer">BloodTakenFromOrg</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/create-messagefor-org" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/create-messagefor-org">CreateReqFororg</Link>
              </div>
            </>
          )}
          {user?.role === "donar" && (
            <>
              <div
                className={`menu-item ${
                  location.pathname === "/donation" && "active"
                }`}
              >
                <i className="fa-sharp fa-solid fa-building-ngo"></i>
                <Link to="/donation">Your Donation</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/get-messagefrom-org" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/get-messagefrom-org">RequestFromOrg</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
