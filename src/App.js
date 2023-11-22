import logo from './logo.svg';
import './App.css';
import GetRange from './Test/GetRange';
import GetRangeA from './Test/GetRangeA';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Cards from './Test/Cards';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<GetRange />}/>
        <Route  path='/cards' element={<Cards />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
