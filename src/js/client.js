import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { createHashHistory } from 'history';

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import StudentEditForm from "./components/StudentEditForm";
import StudentShowForm from "./components/StudentShowForm";

const app = document.getElementById('app');

// useRouterHistory creates a composable higher-order function
const appHistory = createHashHistory({ queryKey: false });

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="edit/:id" component={StudentEditForm}></Route>
      <Route path="show/:id" component={StudentShowForm}></Route>
    </Route>
  </Router>,
app);
