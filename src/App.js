import TelaCadProduto from "./componentes/telas/TelaCadProduto.jsx";
import TelaCadCliente from "./componentes/telas/TelaCadCliente.jsx";
import TelaCadFornecedor from "./componentes/telas/TelaCadFornecedor.jsx";
import TelaCadCategoria from "./componentes/telas/TelaCadCategoria.jsx";
import TelaCadEntregador from "./componentes/telas/TelaCadEntregador.jsx";
import TelaCadUsuario from "./componentes/telas/TelaCadUsuario.jsx";
import TelaMenu from "./componentes/telas/TelaMenu.jsx"
import Tela404 from "./componentes/telas/Tela404.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {
          // A ordem das rotas é importante
        }
        <Routes>
          <Route path="/produtos" element={<TelaCadProduto />} />
          <Route path="/clientes" element={<TelaCadCliente />} />
          <Route path="/fornecedores" element={<TelaCadFornecedor />} />
          <Route path="/categorias" element={<TelaCadCategoria />} />
          <Route path="/entregadores" element={<TelaCadEntregador />} />
          <Route path="/usuarios" element={<TelaCadUsuario />} />
          <Route path="/" element={<TelaMenu props="TESTE" />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// git remote rm origin
// git push --mirror "link da origem"
// git remote add origin "link do novo repositório"