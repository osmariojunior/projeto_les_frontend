import "./App.css";
import "./styles/global.css";
import { Header } from "./components/Header";

import AppRoutes from "./pages/AppRoutes.jsx";
import { StoreProvider } from "./context";

function App() {
  return (
    <div className="app">
      <StoreProvider>
        <Header />
        <AppRoutes />
      </StoreProvider>
    </div>
  );
}

export default App;
