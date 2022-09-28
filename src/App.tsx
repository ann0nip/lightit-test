import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './routes/home/home.component';


const Test = () => {
  return <h1>test</h1>
}

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/aberturas" element={<Home />}>
        <Route path=":categories" element={<Test />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
