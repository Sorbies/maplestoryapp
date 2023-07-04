import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dailies from './pages/dailies/Dailies';
import Bossing from './pages/bossing/Bossing';
import Gear from './pages/gear/Gear';
import Error from './pages/error/Error';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="dailies" element={<Dailies/>} />
          <Route path="bossing" element={<Bossing/>} />
          <Route path="gear" element={<Gear/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
