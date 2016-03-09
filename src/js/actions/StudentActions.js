import axios from "axios";
import dispatcher from "../dispatcher";

export function createStudent(student) {
  dispatcher.dispatch({type: "FETCH_STUDENTS"});

  axios.post('api/students/', student)
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "CREATE_STUDENT", filter: student.classroom, students: response.data });
  })
  .catch(function (response) {
    console.log(response);
  });
}

export function updateStudent(student) {
  dispatcher.dispatch({type: "FETCH_STUDENTS"});

  axios.put('api/students/'+student.classroom+'/'+student.id, student)
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "UPDATE_STUDENT", filter: student.classroom, students: response.data });
  })
  .catch(function (response) {
    console.log(response);
  });
}

export function deleteStudent(student) {
  axios.delete('api/students/'+student.classroom+'/'+student.id)
  .then(function (response) {
    console.log(response);
    dispatcher.dispatch({type: "DELETE_STUDENT", filter: student.classroom, students: response.data });
  })
  .catch(function (response) {
    console.log(response);
  });
}

export function reloadStudents(filter) {
  dispatcher.dispatch({type: "FETCH_STUDENTS"});

  axios.get('api/students/'+filter)
  .then(function (response) {
    dispatcher.dispatch({type: "RECEIVE_STUDENTS", filter: filter, students: response.data });
  })
  .catch(function (response) {
    console.log(response);
  });
}
