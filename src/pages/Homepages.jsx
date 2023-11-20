import React, { useEffect, useState } from 'react'
import axios from 'axios';
import generatePDF from "../Services/Reportgenerator";
import Tablemovies from '../components/Tablemovies';
export default function Homepages() {
    const [movies, setMovies] = useState([])
    const columnsPDF = [{ poster: 'Poster', id: 'ID', title: 'Title', year: 'Year', available: 'Available' }]
    const getAllmovies = async () => {
        try {
            const response = await axios.get("https://fake-movie-database-api.herokuapp.com/api?s=batman");
            setMovies(response.data.search)

        } catch (err) {
            console.log(`Error fetching movies:${err}`)
        }
    }

    useEffect(() => {
        getAllmovies()
    }, [])


    return (
        <>
            <Tablemovies data={movies} />
            <div className='row'>
                <button
                    className="btn"
                    onClick={() => generatePDF(movies.map(m => ({
                        poster: m.Poster,
                        id: m.imdbID,
                        title: m.Title,
                        year: m.Year,
                        available: m.Available ? 'OK' : 'KO'
                    })), columnsPDF, true)}
                >
                    DOWNLOAD PDF MOVIES
                </button>
            </div>
        </>

    )
}
