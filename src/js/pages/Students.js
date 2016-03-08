import React from "react";

import StudentRow from "../components/StudentRow";
//import * as TodoActions from "../actions/TodoActions";
import StudentStore from "../stores/StudentStore";

export default class Student extends React.Component {
  constructor() {
    super();
    this.getStudents = this.getStudents.bind(this);
    this.state = {
      students: StudentStore.getAll(),
    };
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

  /*reloadTodos() {
    TodoActions.reloadTodos();
  }*/

  render() {
    const { students } = this.state;

    const StudentComponents = students.map((student) => {
        return <StudentRow key={student.id} {...student}/>;
    });

    return (
      <table class="table table-striped table-hover ">
        <thead>
          <tr>
            <th>#</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Identifiant</th>
          </tr>
        </thead>
        <tbody>
          {StudentComponents}
        </tbody>
      </table>
    );
  }
  
}
