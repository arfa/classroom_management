import dispatcher from "../dispatcher";

export function newFirstName(value) {
  dispatcher.dispatch({
    type: "NEW_FIRSTNAME",
    value,
  });
}

export function newLastName(value) {
  dispatcher.dispatch({
    type: "NEW_LASTNAME",
    value,
  });
}

export function newBirthday(value) {
  dispatcher.dispatch({
    type: "NEW_BIRTHDAY",
    value,
  });
}

export function newGender(value) {
  dispatcher.dispatch({
    type: "NEW_GENDER",
    value,
  });
}

export function newClassroom(value) {
  dispatcher.dispatch({
    type: "NEW_CLASSROOM",
    value,
  });
}

export function newEmail(value) {
  dispatcher.dispatch({
    type: "NEW_EMAIL",
    value,
  });
}
