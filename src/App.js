import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"
import Login from "./pages/login/login"
import Signin from "./pages/signin/signin"
import NotFound from "./components/notFound.jsx"
import Badges from "./pages/Badges/Badges"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
