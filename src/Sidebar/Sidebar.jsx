import React from "react";
import "./sidebar.css";
import { BiChevronDown } from "react-icons/bi";


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar_box">
        <h1 className="sidebar_head">Course Tree</h1>

        <hr />

        {/* OOPS With JavaScript For Ui */}

        <div className="sidebar_dropdown">
          <div className="dropdown">
            <span
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              OOPS With JavaScript For Ui<BiChevronDown className="BiChevronDown" />
            </span>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
              id="sidebar_ul"
            >
              <li>
                <a className="dropdown-item active" href="#">
                Learning Material
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                Usage of DOM
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                Asynchronous Program 
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                Coding Questions 1
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* JavaScript */}

        <div className="sidebar_dropdown">
        <div className="dropdown">
            <span
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              JavaScript      <BiChevronDown className="BiChevronDown1" />
            </span>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
              id="sidebar_ul"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* OOPS */}

        <div className="sidebar_dropdown">
        <div className="dropdown">
            <span
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >OOPS<BiChevronDown className="BiChevronDown2" />
            </span>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
              id="sidebar_ul"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* JAVASCCRIPT FOR UI */}

        <div className="sidebar_dropdown">
        <div className="dropdown">
            <span
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              JavaScript For Ui<span ></span><BiChevronDown className="BiChevronDown3" />
            </span>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
              id="sidebar_ul"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
