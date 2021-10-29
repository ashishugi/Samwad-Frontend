import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Button } from "./style";
import Login from "../Login/Login";
import Profile from "../profile/profile";
import Posts from "../Posts/Posts";
import Register from "../Register/Register";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Posts}></Route>
      <Route exact path="/signup" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/profile" component={Profile}></Route>
    </Router>
  );
}

export default App;
