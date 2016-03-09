import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import StudentEditForm from "./components/StudentEditForm";
import StudentShowForm from "./components/StudentShowForm";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="edit/:id" component={StudentEditForm}></Route>
      <Route path="show/:id" component={StudentShowForm}></Route>
    </Route>
  </Router>,
app);
