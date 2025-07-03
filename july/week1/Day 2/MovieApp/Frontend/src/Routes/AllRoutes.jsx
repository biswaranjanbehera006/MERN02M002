import React from 'react'
import { Routes, Route } from "react-router";
import Home from '../components/Home';
import Movies from '../components/Movies';
import Movie from '../components/Movie';

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<Movies />} path='/movies' />
                <Route element={<Movie />} path='/movie/:id' />
            </Routes>
        </div>
    )
}

export default AllRoutes
