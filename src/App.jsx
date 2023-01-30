import './App.css';
import './variables.css';
import Header from "./components/Header/Header";
import GridCards from './components/Grid-cards/GridCards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GridCards></GridCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
