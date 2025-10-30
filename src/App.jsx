import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <header></header>

      <main>
        <Routes>
          <Route path="/" element={<>DoaTinga Home</>} />

          <Route path="/login" element={<>Login</>} />

          <Route path="/catalogo" element={<>Catálogo</>} />

          <Route path="/cadastro" element={<RegisterPage />} />

          <Route path="*" element={<>404 MEU CHAPA!</>} />

        </Routes>
      </main>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;


