import './App.css';
import Nominations from './containers/Nominations/Nominations';
import Results from './containers/Results/Results';
import Search from './containers/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Results />
        <Nominations />
      </header>
    </div>
  );
}

export default App;
