import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/Catalogo'; // 👈 import da página

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2 style={{ textAlign: 'center' }}>DoaTinga</h2>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<>DoaTinga Home</>} />
          <Route path="/login" element={<>Login</>} />
          
          {/* 👇 Aqui chamamos o componente de catálogo */}
          <Route path="/catalogo" element={<Catalogo />} />

          <Route path="*" element={<>404 MEU CHAPA!</>} />
        </Routes>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px' }}>
        © 2025 DoaTinga
      </footer>
    </BrowserRouter>
  );
}

export default App;
