import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class InputStore extends EventEmitter {
  constructor() {
    super()
    this.student = {
        id: null,
        firstname: null,
        lastname: null,
        birthday: null,
        gender: "Homme",
        classroom: null,
        email: null
    };
  }

  newFirstName(value) {

    this.student.firstname = value;

    this.emit("change");
  }

  newLastName(value) {

    this.student.lastname = value;

    this.emit("change");
  }

  newBirthday(value) {

    this.student.birthday = value;

    this.emit("change");
  }

  newGender(value) {

    this.student.gender = value;

    this.emit("change");
  }

  newClassroom(value) {

    this.student.classroom = value;

    this.emit("change");
  }

  newEmail(value) {

    this.student.email = value;

    this.emit("change");
  }

  get() {
    return this.student;
  }

  handleActions(action) {
    switch(action.type) {
      case "NEW_FIRSTNAME": {
        this.newFirstName(action.value);
      }
      case "NEW_LASTNAME": {
        this.newLastName(action.value);
      }
      case "NEW_BIRTHDAY": {
        this.newBirthday(action.value);
      }
      case "NEW_GENDER": {
        this.newGender(action.value);
      }
      case "NEW_CLASSROOM": {
        this.newClassroom(action.value);
      }
      case "NEW_EMAIL": {
        this.newEmail(action.value);
      }
    }
  }

}

const inputStore = new InputStore;
dispatcher.register(inputStore.handleActions.bind(inputStore));

export default inputStore;
