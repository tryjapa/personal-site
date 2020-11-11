import Router from "next/dist/next-server/lib/router/router";
import { Route, Switch } from "react-router-dom";

const { default: navbar } = require("./components/navbar");

import Navbar from "./components/navbar"


function Home(){
    return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
        <Route path="/"></Route>
    </Switch>
    </Router>
    
    </>)
}

export default Home