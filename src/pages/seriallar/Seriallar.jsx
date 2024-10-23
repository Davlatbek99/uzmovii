import React from 'react'
import MovieCards from '../../components/movieCards/MovieCards'

const Seriallar = () => {

  return (
    <>
      <MovieCards url={'movie/top_rated'} title='Seriallar' count={8}/>
    </>
  )
}

export default Seriallar