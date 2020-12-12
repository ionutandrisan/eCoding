import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Login";
import NavBar from "../Navbar";
import Register from "../Register";
import Footer from "../Footer";
import Home from "../Home";

const InstructorApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/home" exact component={Home} />

        {/* <Route path="/tryYourCode" exact component={RunUserCode} /> */}

        <Route path="/login" exact component={Login} />

        <Route path="/register" exact component={Register} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default InstructorApp;
