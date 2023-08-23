import './App.css';
import DashBoard from './Components/DashBoard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='initial-nav'><Navbar/></div>
      <DashBoard/>
    </div>
  );
}

export default App;
