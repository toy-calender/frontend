import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add-employee/:id" component={CreateEmployee}></Route>
            <Route path="/view-employee/:id" component={ViewEmployee}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
