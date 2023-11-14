// import logo from './logo.svg';
import './App.css';
import Accordion from './Components/Accordion';
import CardSection from './Components/CardSection';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar'
import SongsTab from './Components/SongsTab';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CardSection albums={'top'} />
      <CardSection albums={'new'} />
      <SongsTab/>
      <Accordion/>
    </div>
  );
}

export default App;
