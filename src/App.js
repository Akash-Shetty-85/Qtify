// import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Card/>
    </div>
  );
}

export default App;
