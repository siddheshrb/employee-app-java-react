import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponenet";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
                {/*<div className="row">*/}
                {/*    <div className="col-xs-2">*/}
                {/*        <SidebarComponent/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {EmployeeListComponent}></Route>
                        <Route path = "/employees" component = {EmployeeListComponent}></Route>
                        <Route path = "/employee/add/:id" component = {CreateEmployeeComponent}></Route>
                        <Route path = "/employee/view/:id" component = {ViewEmployeeComponent}></Route>
                        <EmployeeListComponent />
                    </Switch>
                </div>
            <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
