import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom";
import MovieStateContext from './context/Movie/MovieStateContext';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import MovieDetail from './components/Moviesdetail/MovieDetail';
import SignIn from './components/Signin/SignIn';
import SignInRoute from './Routes/SignInRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import UserStateContext from './context/User/UserStateContext';
import SignUp from './components/Signup/SignUp';
import Alerts from './components/Alert/Alert';

const App = () => {
    return (
        <>
            <UserStateContext>
                <MovieStateContext>
                    <BrowserRouter>
                        <Navbar />
                        <Alerts />
                        <Routes>
                            <Route path="/explore" element={<ProtectedRoute><MovieList /></ProtectedRoute>} />
                            <Route path="/movieslist" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
                            <Route path="/moviedetail" element={<ProtectedRoute>< MovieDetail /></ProtectedRoute>} />
                            <Route path="/" element={<SignInRoute>< SignIn /></SignInRoute>} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </BrowserRouter>
                </MovieStateContext>
            </UserStateContext>
        </>
    )
}

export default App


