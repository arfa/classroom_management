import React from "react";

import StudentRow from "../components/StudentRow";
import * as StudentActions from "../actions/StudentActions";
import StudentStore from "../stores/StudentStore";

export default class Student extends React.Component {
  constructor() {
    super();
    this.getStudents = this.getStudents.bind(this);
    this.state = {
      students: StudentStore.getAll(),
    };
    StudentActions.reloadStudents(StudentStore.getFilter());
  }

  componentWillMount() {
    StudentStore.on("change", this.getStudents);
  }

  componentWillUnmount() {
    StudentStore.removeListener("change", this.getStudents);
  }

  getStudents() {
    this.setState({
      students: StudentStore.getAll(),
    });
  }

  render() {
    const { students } = this.state;

    const StudentComponents = students.map((student) => {
        return <StudentRow history={this.props.history} key={student.id} {...student}/>;
    });

    return (
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {StudentComponents}
        </tbody>
      </table>
    );
  }

}
