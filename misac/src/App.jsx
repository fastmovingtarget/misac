import './App.css';
import MisacPage from './MisacPage'
import OptionsProvider from './OptionsContext';

function App() {   
  return (
    <div className="App">
      <OptionsProvider>
          <MisacPage />
      </OptionsProvider>
    </div>
  );
}

export default App;
