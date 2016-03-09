import React from "react";

import Filter from "../components/Filter";
import StudentAddForm from "../components/StudentAddForm";
import Students from "./Students";

export default class Index extends React.Component {

  render() {
    return (
      <div class="row">
        <div class="col-lg-4">
          <Filter class="well"> </Filter>
          <StudentAddForm class="well"> </StudentAddForm>
        </div>
        <div class="col-lg-8">
          <Students history={this.props.history} > </Students>
        </div>
      </div>
    );
  }
}
