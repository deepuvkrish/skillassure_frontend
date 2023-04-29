import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Handson.css";

const Handson = () => {
  return (
    <div className="Handson">
      <div>
        <h1 className="handson_head">LAB 1</h1>

        <p className="handson_para">
          For making the application look good client wants you to add the
          background color and the bottom border for the header of the 'Fiery
          Restaurant' application.
        </p>

        <h1 className="handson_head">Tasks</h1>

        <p className="handson_para1">
          1. Use 'getElementById' to get the header and store it in a variable.
          Note: Class name of header is 'headerTitle'.
          <br /> 2. Background color is set as 'Yellow'. <br />
          3. Bottom border is set as solid, 5px and black color.
        </p>

        <button type="button" class="btn btn-outline-primary" id="mark_buttonl">
          <FontAwesomeIcon icon={faCheck} className="mr-2" />
          Mark as Completed
        </button>

        <button type="button" class="btn btn-primary" id="startcode_button">
          start code
        </button>

        <hr></hr>

        <h1 className="handson_head">LAB 2</h1>

        <p className="handson_para">
          Client want its application to look good, use query selector to change
          to the background of odd place li items as light-gray{" "}
        </p>

        <h1 className="handson_head">Tasks</h1>

        <p className="handson_para1">
          1. Get all the odd place items in Added Items using querySelector.
          Note the li class name of items is 'list-group-item'.<br></br> 2.
          Iterating through above list and set the background color as
          'lightgray'
        </p>

        <button type="button" class="btn btn-outline-primary" id="mark_buttonl">
          <FontAwesomeIcon icon={faCheck} className="mr-2" />
          Mark as Completed
        </button>

        <button type="button" class="btn btn-primary" id="startcode_button">
          start code
        </button>
      </div>
    </div>
  );
};

export default Handson;
