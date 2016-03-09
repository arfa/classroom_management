import React from "react";

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

export default class Filter extends React.Component {
  constructor() {
    super();
    this.getFilter = this.getFilter.bind(this);
    this.state = {
      filter: StudentStore.getFilter(),
    };
  }

  filter(e){
    const filter = e.target.value.toLowerCase();
    StudentActions.reloadStudents(filter);
  }

  componentWillMount() {
    StudentStore.on("change", this.getFilter);
  }

  componentWillUnmount() {
    StudentStore.removeListener("change", this.getFilter);
  }

  getFilter() {
    console.log("update filter")
    this.setState({
      filter: StudentStore.getFilter(),
    });
  }

  render() {
    return (
      <form class="form-horizontal well">
        <fieldset>
          <legend>Choisir Une Classe:</legend>
          <div class="form-group">
            <div class="col-lg-12">
              <select class="form-control" id="select" onChange={this.filter} value={this.state.filter}>
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
