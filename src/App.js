import React from "react";
import "./App.css";

function App() {
  return (
      <Router>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
