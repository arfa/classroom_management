import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
//import Todos from "./pages/Todos";
import Index from "./pages/Index";
import StudentEditForm from "./components/StudentEditForm";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="student" component={StudentEditForm}></Route>
    </Route>
  </Router>,
app);
