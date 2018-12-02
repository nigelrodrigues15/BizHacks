import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {}

  render() {
    return (
      <div className="home-navbar">
        <div className="home-navbar-right">
          <Link className="Link" to="/">
            <div className="logo">
              <img src="./Nimbus.png" alt="" />
            </div>
          </Link>
        </div>
        <div className="home-navbar-right">
          <Link className="Link" to="/home">
            <Button variant="outlined" id="home-navbar-center-box1">
              Research
            </Button>
          </Link>
          <Link className="Link" to="/home">
            <Button variant="outlined" id="home-navbar-center-box2">
              Education
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
