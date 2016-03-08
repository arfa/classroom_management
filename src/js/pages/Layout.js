import React from "react";
import { IndexLink, Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "100px"
    };

    return (
      <div>

        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <IndexLink to="/" class="navbar-brand">Gestion de Classe Numérique</IndexLink>
            </div>
          </div>
        </nav>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
