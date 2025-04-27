import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Verification from './pages/Verification'; 
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout/>}>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
  );
}

export default App;
