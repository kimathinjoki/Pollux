import './App.css';
import Nav from './lib/Nav';
import Landing from './routes/Landing';
import Groups from './routes/Groups';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <body>
        <div className="App" class="container-fluid">
        
          <Nav />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>

        </div>
      </body>
  );
}

export default App;
