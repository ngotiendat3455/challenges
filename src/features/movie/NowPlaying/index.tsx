import React, { createRef } from 'react';
import MovieTemplate from '../components/MovieTemplate';
import useCallService from 'hooks/useCallService';
import { fetchMovie } from 'services/movie';
import Loading from 'components/atoms/Loading';

const NowPlaying: React.FC<any> = () => {

  const { loading,
    data,
    handleChangePage,
    pagination,
    hidden,
    initData
  } = useCallService(fetchMovie, [])
  
  if (!initData) {
    return <Loading variant="fullScreen" isShow />
  }
  return (
    <div>
      <MovieTemplate
        isLoading={loading}
        onLoadMore={() => handleChangePage()}
        disabledButtonLoadMore={hidden}
        movies={data}
      />
    </div>
  )
}

export default NowPlaying;