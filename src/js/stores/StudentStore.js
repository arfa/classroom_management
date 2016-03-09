import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class StudentStore extends EventEmitter {
  constructor() {
    super()
    this.filter ="a";
    this.students = [];
  }

  createStudent(students) {
    this.students.push(student);

    this.emit("change");
  }

  getAll() {
    return this.students;
  }

  byId(id) {
    const result = this.students.filter( (student) => {
      return student.id === parseInt(id,10);
    });

    return result[0];
  }

  getFilter() {
    return this.filter;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_STUDENT": {
        this.students = action.students;
        this.filter = action.filter;
        this.emit("change");
      }
      case "UPDATE_STUDENT": {
        this.students = action.students;
        this.filter = action.filter;
        this.emit("change");
      }
      case "RECEIVE_STUDENTS": {
        this.students = action.students;
        this.filter = action.filter;
        this.emit("change");
      }
      case "DELETE_STUDENT": {
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
