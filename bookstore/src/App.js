import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { BookProvider } from './contexts/BookContext';

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
import { Books } from './components/Books/Books';
import { BookDetails } from './components/BookDetails/BookDetails';
import { CreateBook } from "./components/CreateBook/CreateBook";
import { EditBook } from './components/EditBook/EditBook';
import { RouteGuard, GuestGuard } from './components/Common/RouteGuard';
import { BookOwner } from './components/Common/BookOwner';

function App() {
    return (
        <AuthProvider>
            <BookProvider>
                <Header />
                <div id="all">
                    <div id="content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/books' element={<Books />} />
                            <Route path='/books/:bookId' element={<BookDetails />} />

                            <Route element={<GuestGuard />}>
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                            </Route>

                            <Route element={<RouteGuard />}>
                                <Route path='/create' element={<CreateBook />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/books/:bookId/edit' element={
                                    <BookOwner>
                                        <EditBook />
                                    </BookOwner>
                                } />
                            </Route>

                            <Route path='*' element={<Books />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BookProvider>
        </AuthProvider>
    );
}

export default App;
