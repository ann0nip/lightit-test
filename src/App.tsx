import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';

const InitialComponent = () => (
  <Home>
    {/* Put the content that you wanna show at the Content Window */}
  </Home>
)

function App() {
  return (
    <Routes>
      <Route path="/*" element={<InitialComponent />} />
    </Routes>

  );
}

export default App;
