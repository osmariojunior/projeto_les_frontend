import './App.css';
import './styles/global.css';
import { Header } from './components/Header';

import AppRoutes from './pages/AppRoutes.jsx';


function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes/>
    </div>
  );
}

export default App;
