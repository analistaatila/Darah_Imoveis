import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home.js'
import CadastroUser from './Pages/CadastroHome.js'
import Anuncios from './Pages/Anuncios.js'
import Login from './Pages/Login.js'
import CadastroImovel from './Pages/CadastroImovel.js'
import DetalheImovel from './Pages/CadastroDetalheImovel'
import MeusAnuncios from './Pages/MeusAnuncios'
import CadastroAnuncio from './Pages/CadastroAnuncio.js'
import CadastroFoto from './Pages/CadastroFoto.js'
import CadastroValores from './Pages/CadastroValores.js'
import CadastroQuarto from './Pages/CadastroQuarto.js'
import { UsuarioLogadoProvider } from './Context/UsuarioLogado';

function App() {
  return (
    <UsuarioLogadoProvider>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/homeCadastro" component={CadastroUser} exact />
        <Route path="/anuncios" component={Anuncios} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/imovel" component={CadastroImovel} exact />
        <Route path="/CadAnuncio" component={CadastroAnuncio} exact />
        <Route path="/CadFoto" component={CadastroFoto} exact />
        <Route path="/CadValores" component={CadastroValores} exact />
        <Route path="/CadQuarto" component={CadastroQuarto} exact />
        <Route path="/detalhe" component={DetalheImovel} exact />
        <Route path="/MeusAnuncios" component={MeusAnuncios} exact />

        
      </Switch>
    </Router>
    </UsuarioLogadoProvider>
  );
}

export default App;
