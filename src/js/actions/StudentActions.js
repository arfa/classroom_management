import dispatcher from "../dispatcher";

export function createStudent(student) {
  dispatcher.dispatch({
    type: "CREATE_STUDENT",
    student,
  });
}

export function deleteStudent(id) {
  dispatcher.dispatch({
    type: "DELETE_STUDENT",
    id,
  });
}

export function reloadStudents(filter) {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  const students = [
      {
        id: 113464613,
        firstname: "Marwen",
        lastname: "Arfa",
        birthday: 575510400000,
        gender: "Homme",
        classroom: "a",
        email: "marwen.arfa@gmail.com"
      },
      {
        id: 235684679,
        firstname: "Wassim",
        lastname: "Arfa",
        birthday: 514771200000,
        gender: "Homme",
        classroom: "a",
        email: "wassim.arfa@gmail.com"
      },
      {
        id: 235684671,
        firstname: "Zied",
        lastname: "Bougdir",
        birthday: 475459200000,
        gender: "Homme",
        classroom: "b",
        email: "zied.arfa@gmail.com"
      },
      {
        id: 235684670,
        firstname: "Youssef",
        lastname: "Meftah",
        birthday: 475459200000,
        gender: "Homme",
        classroom: "b",
        email: "zied.arfa@gmail.com"
      }
  ];

  dispatcher.dispatch({type: "FETCH_STUDENTS"});
  setTimeout(() => {
    const filtered = students.filter((student) => {
      return student.classroom === filter;
    });

    dispatcher.dispatch({type: "RECEIVE_STUDENTS", filter: filter, students: filtered });
  }, 1000);
}
