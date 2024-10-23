import React from 'react'
import { useParams } from 'react-router'
import MovieCards from '../movieCards/MovieCards'

const SimilarMovies = () => {
    const { id } = useParams()
    return (
        <>
            <MovieCards url={`movie/${id}/similar`} title='Similar Films' count={4} />
        </>
    )
}

export default SimilarMovies