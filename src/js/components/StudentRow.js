import React from "react";
import * as pp  from 'react-router';

import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

export default class StudentRow extends React.Component {
  constructor(props) {
    super();
  }

  editNavigate() {
    this.props.history.push("/edit/"+this.props.id);
  }

  showNavigate() {
    this.props.history.push("/show/"+this.props.id);
  }

  deleteStudent() {
    StudentActions.deleteStudent(this.props);
  }

  render() {
    const student = Object.assign({}, this.props);

    return (
      <tr>
        <td class="col-md-4">{student.firstname}</td>
        <td class="col-md-4">{student.lastname}</td>
        <td class="col-md-4">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary glyphicon glyphicon-edit hvr-pop" onClick={this.editNavigate.bind(this)}></button>
            <button type="button" class="btn btn-info glyphicon glyphicon-eye-open hvr-pop" onClick={this.showNavigate.bind(this)}></button>
            <button type="button" class="btn btn-danger glyphicon glyphicon-trash hvr-pop" onClick={this.deleteStudent.bind(this)}></button>
          </div>
        </td>
      </tr>
    );
  }
}
