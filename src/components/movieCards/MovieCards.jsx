import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/card/MovieCard'
import styles from "./MovieCards.module.scss"
import useFetch from '../../hooks/fetch/Fetch'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MovieCards = ({ url, title = "" , count=8}) => {
  const [page, setPage] = useState(1)

  const [miniUrl, setMiniUrl] = useState(null)
  useEffect(() => {
    setMiniUrl(url)
  }, [url])
  const { data, loading, error } = useFetch(miniUrl, page)

  const handleChange = (event, value) => {
    setPage(value)
  }



  return (
    <>
      <div className={styles.cards}>
        <div className={`${styles.cards_box} container`}>
          <h1 className={styles.cards_title}>{title}</h1>
          <div className={styles.cards_card}>
            {data?.results?.slice(0, count).map((item) => (
              <MovieCard key={item.id} id={item.id} title={item.title} img={item.poster_path} />
            ))}
          </div>
          <div className={styles.cards_pagination}>

            <Stack spacing={2}>
              <Pagination onChange={handleChange} count={data?.total_pages} variant="outlined" shape="rounded" className={styles.cards_pagination_text}
                sx={{
                  '& .Mui-selected': {
                    backgroundColor: '#131a20',
                    color: '#a5bbdc',
                  },
                  '& .MuiPaginationItem-root': {
                    backgroundColor: '',
                    color: '#a5bbdc',
                    border: '1px solid #222933',
                  },
                  '& .MuiPaginationItem-root:hover': {
                    backgroundColor: 'rgb(82, 100, 128, 0.5)',
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCards