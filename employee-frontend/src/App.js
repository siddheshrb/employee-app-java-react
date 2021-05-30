import logo from './logo.svg';
import './App.css';
import MyDummyComponent from './components/MyDummyComponent';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <HeaderComponent />
          <div className="container">
            <EmployeeListComponent/>
          </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
