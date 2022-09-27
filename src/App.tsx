import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/nav-bar/nav-bar.component';

const Layout = () => {
  return <div>
    <NavBar />
    <section>
      <div>
        <div>
          <li>Aberturas</li>
          <li>Equipamiento</li>
          <li>Terminaciones</li>
        </div>
        <div>
          sidenav
        </div>
      </div>
    </section>
  </div>
}

const Test = () => {
  return <h1>test</h1>
}

function App() {
  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/aberturas" element={<Layout />}>
        <Route path=":categories" element={<Test />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
