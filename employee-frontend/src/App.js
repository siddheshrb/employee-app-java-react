import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyDummyComponent from './components/MyDummyComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" component = {EmployeeListComponent}></Route>
                        <Route path = "/employees" component = {EmployeeListComponent}></Route>
                        <EmployeeListComponent />
                    </Switch>
                </div>
            <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
