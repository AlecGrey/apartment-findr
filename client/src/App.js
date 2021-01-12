import Body from "./components/Body";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import "./App.css";

function App() {
  return (
    <Router>
      <div id='page' className='d-flex flex-column justify-content-between'>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/browse' component={ Body } />
      </div>
    </Router>
  );
}

export default App;
