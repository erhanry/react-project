import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Footer from "./components/Footer/Footer";
import { Header} from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Books } from './components/Books/Books';
import { Logout } from './components/Logout/Logout';



function App() {
    return (
        <AuthProvider>
            <Header />
            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/books' element={<Books />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                                <Route path='/logout' element={<Logout />} />
                                {/*<Route path='/catalog/:gameId' element={<GameDetails />} /> */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthProvider>
    );
}

export default App;
