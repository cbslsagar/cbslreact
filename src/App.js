import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Dashboard from './container/Dashboard';
import Layout from './component/layout/layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps these nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
