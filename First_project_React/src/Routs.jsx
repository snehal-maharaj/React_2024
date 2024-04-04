
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ColorApp from "./page/projects/ColorApp"
import CounterApp from './page/projects/CounterApp';
import CardTask from './page/projects/CardTask';

export default function Routs() {
  return (
    <Router>
        <Routes>
           <Route path="/colorApp" element={<ColorApp/>} />
           <Route path="/counterApp" element={<CounterApp/>} />
           <Route path="/cardApp" element={<CardTask/>} />
        </Routes>
    </Router>
  )
}
