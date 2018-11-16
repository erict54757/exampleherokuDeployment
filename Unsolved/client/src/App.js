import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
const App = () => (
    <Router>
      <div>
 <Nav/>
 
      <Switch> 
  <Route path="/books" exact component={Books}/>
  <Route path="/" exact component={Books} />
  <Route path="/books/:id" exact component={Detail} />
  <Route component={NoMatch} />
  {/* <Redirect from="/Books" to="/will-match" /> */}
  {/* <Route path="/will-match" component={Nav} /> */}

</Switch>

  </div>
  </Router>
);

export default App;
