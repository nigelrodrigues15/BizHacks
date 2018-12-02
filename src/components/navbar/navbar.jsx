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
        <div className="home-navbar-left">
          <Link className="Link" to="/">
            <div className="dragonfly">
              <div className="dfbl" />
              <div />
              <div />
              <div className="dfbl" />
            </div>
          </Link>
          <Link className="Link" to="/home">
            <Button variant="outlined" id="home">
              Home
            </Button>
          </Link>
        </div>
        <div className="home-navbar-center">
          <Link className="Link" to="/home">
            <Button variant="outlined" id="home-navbar-center-box1">
              Research
            </Button>
          </Link>
        </div>
        <div className="home-navbar-center">
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
