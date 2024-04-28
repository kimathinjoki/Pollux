import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Groups from './components/Groups';
import NewGroupForm from './components/NewGroupForm';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <body id="app-container">
        <div className="App">
        
          <Nav />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/newgroup" element={<NewGroupForm />} />
          </Routes>

        </div>
      </body>
  );
}

export default App;
