// import logo from './logo.svg';
import './App.css';
import CardSection from './Components/CardSection';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <CardSection/>
    </div>
  );
}

export default App;
