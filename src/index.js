// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App.js";

// ReactDOM.render(<App/>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "./layouts/Admin.js";
import SignIn from "./views/SignIn.js";
import SignUp from "./views/SignUp.js";

const FourOhFour = () => <h1>404</h1>;

function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route exact path="/signin" render={(props) => <SignIn {...props} />} />
      <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
      <Redirect exact from="/" to="/admin/dashboard" />
      <Route exact path="/user/:username" component={User} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
