import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyDummyComponent from './components/MyDummyComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {EmployeeListComponent}></Route>
                        <Route path = "/employees" component = {EmployeeListComponent}></Route>
                        <Route path = "/employee/add" component = {CreateEmployeeComponent}></Route>
                        <EmployeeListComponent />
                    </Switch>
                </div>
            <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
