import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Layout from './pages/Layout/Layout'
import Main from './pages/main/Main'
import NewBadge from "./pages/NewBadge/NewBadge"
import PathNotFound from "./pages/PathNotFound/PathNotFound"
function App() {
  return (

    <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
      {/* <Route exact path="/AllBadges" component={AllBadges}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route> */}
          <Route exact path="/new" component={NewBadge}></Route>
         <Route component={PathNotFound}></Route> 
        </Switch>
    </Layout>
    </BrowserRouter>

  );
}

export default App;
