import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const steps_bar = () => {
  return (
    <div className="steps_bar text-center">
        <ul class='steps'>
            <li class='active'></li>
            <li class='active'></li>
            <li></li>
        </ul>
    </div>
  );
};

export default steps_bar;
