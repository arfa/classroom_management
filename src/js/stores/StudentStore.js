import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class StudentStore extends EventEmitter {
  constructor() {
    super()
    this.filter ="a";
    this.students = [];
  }

  createStudent(student) {
    const id = Date.now();
    const newStudent =  Object.assign({id}, student);

    this.students.push(newStudent);

    this.emit("change");
  }

  getAll() {
    return this.students;
  }

  /*byClassroom(classroom) {
    return this.students.filter((student) => {
      return student.classroom === classroom;
    });
  }*/

  getFilter() {
    return this.filter;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_STUDENT": {
        this.createStudent(action.student);
      }
      case "RECEIVE_STUDENTS": {
        this.students = action.students;
        this.filter = action.filter;
        this.emit("change");
      }
    }
  }

}

const studentStore = new StudentStore;
dispatcher.register(studentStore.handleActions.bind(studentStore));

export default studentStore;
