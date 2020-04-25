import React from "react";
import { connect } from "react-redux";

const Markup = () => {
  return (
    <div className="container-fluid" id="navBar">
      <nav className="navbar container navbar-expand-lg navbar-customize">
        <a className="navbar-brand" href="#">
          Products Filter
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};
const mapStateToProps = ({ auth: { token } }) => ({
  token,
});

export default connect(mapStateToProps)(Markup);
