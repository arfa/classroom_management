import React from "react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

export default class Filter extends React.Component {
  filter(e){
    const filter = e.target.value.toLowerCase();
    console.log(filter);
    StudentActions.reloadStudents(filter);
  }

  /*componentWillMount() {
    StudentStore.on("change", this.getFilter);
  }

  componentWillUnmount() {
    StudentStore.removeListener("change", this.getFilter);
  }

  getFilter() {
    this.setState({
      filter: StudentStore.getFilter(),
    });
  }*/

  render() {
    return (
      <form class="form-horizontal well">
        <fieldset>
          <legend>Choisir Une Classe:</legend>
          <div class="form-group">
            <div class="col-lg-12">
              <select class="form-control" id="select" onChange={this.filter}>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
