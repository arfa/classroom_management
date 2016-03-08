import React from "react";
import Link from "react-router";

export default class StudentRow extends React.Component {
  constructor(props) {
    super();
  }

  editNavigate() {
    console.log(this.props);
    this.props.history.push(null, "student");
  }

  render() {
    const student = Object.assign({}, this.props);

    return (
      <tr>
        <td>1</td>
        <td>{student.lastname}</td>
        <td>{student.firstname}</td>
        <td>{student.id}</td>
      </tr>
    );
  }
}
