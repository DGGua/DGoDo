import { Home } from './pages/Home'
import './App.scss';
import logo from './static/logo.png'

function App() {

    return (
        <div className="App">
            <img className="img-logo" id="ld" src={logo} alt="logo" />
            <img className="img-logo" id="ru" src={logo} alt="logo" />
            <Home />
        </div>
    );
}

export default App;
