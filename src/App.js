import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"
import login from "./pages/login/login"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
