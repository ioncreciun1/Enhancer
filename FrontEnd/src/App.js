import {
  Switch,
  Route,
  Router,
  Redirect
} from "react-router-dom"

import { createBrowserHistory } from 'history';

import MainPage from "./Pages/MainPage"
import UploadPage from "./Pages/UploadPage";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/main" component = {MainPage}/>
          <Route path="/blackWhiteImage" component = {UploadPage}/>
          <Route path="/BlackWhitVideo" component = {MainPage}/>
          <Route path="/ImageEnhance" component = {MainPage}/>
          <Route path="/About" component = {MainPage}/>
          <Redirect to="/main"/>
        </Switch>
    </Router>
  );
}

export default App;