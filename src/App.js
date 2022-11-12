import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Public from './pages/Public'
import Private from './pages/Private'
import Login from './pages/Login'
import PrivateOutlet from './pages/PrivateOutlet'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<PrivateOutlet />}>
          <Route path="" element={<Private />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
