import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui/themes/base/accordion.css";
import "jquery-ui/ui/widgets/accordion";
import { BiChevronDown } from "react-icons/bi";
import "./its.css"

function Sidebar() {
  useEffect(() => {
    $("#sidebar").accordion({
      collapsible: true,
      activate: function(event, ui) {
        $(ui.newHeader).addClass("active");
        $(ui.newPanel).addClass("active");
        $(ui.oldHeader).removeClass("active");
        $(ui.oldPanel).removeClass("active");
      }
    });

    // Add the "active" class to all accordion headers and contents
    $(".accordion-header").addClass("active");
    $(".accordion-content").addClass("active");
  }, []);

  return (
    <div>
      <section className="sidebar_box">
        <h1 className="sidebar_head">Course Tree</h1>
        <hr />
  
        {/* OOPS With JavaScript For UI */}
        <div className="sidebar_accordion" id="sidebar">
          <div className="accordion-header">
            <span type="button">
              OOPS With JavaScript For UI<BiChevronDown className="BiChevronDown" />
            </span>
          </div>
          <div className="accordion-content" id="sidebar_content">
            <a
              className="dropdown-item active"
              href="#learning_material"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_learning_material"
            >
              <span type="button">
                Learning Material 
                <BiChevronDown className="BiChevronDowno7" />
              </span>
              <hr className="my-1"/>

            </a>
            <div className="collapse" id="collapse_learning_material">
              <a className="dropdown-item1" href="#">
                Usage of DOM
              </a>
        
              <a className="dropdown-item1" href="#">
                Asynchronous Programming
              </a>
              
              <a className="dropdown-item1" href="#">
                Coding Questions 1
              </a>
              
            </div>
            <a className="dropdown-item" href="#">
              Usage of DOM  
              <BiChevronDown className="BiChevronDownf" />
            </a>
            <hr className="my-1"/>
            <a className="dropdown-item" href="#">
              Asynchronous Program 
              <BiChevronDown className="BiChevronDownk" />
            </a>
            <hr className="my-1"/>
            <a className="dropdown-item" href="#">
              Coding Questions 1  
              <BiChevronDown className="BiChevronDownc" />
            </a>
          </div>

          {/* JavaScript */}
          <div className="accordion-header">
            <span type="button">
              JavaScript<BiChevronDown className="BiChevronDown1" />
            </span>
          </div>
          <div className="accordion-content">
            <a className="dropdown-item active" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
           {/*  OOPS  */}
          <div className="accordion-header">
            <span type="button">
            OOPS <BiChevronDown className="BiChevronDown2" />
            </span>
          </div>
          <div className="accordion-content">
            <a className="dropdown-item active" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
            {/* JAVASCCRIPT FOR UI */}
            <div className="accordion-header">
            <span type="button">
              JavaScript for UI<BiChevronDown className="BiChevronDown3" />
            </span>
          </div>
          <div className="accordion-content">
            <a className="dropdown-item active" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;