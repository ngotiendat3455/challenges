import React, { createRef } from 'react';
import MovieTemplate from '../components/MovieTemplate';
import useCallService from 'hooks/useCallService';
import { fetchMovie } from 'services/movie';
import Loading from 'components/atoms/Loading';

const NowPlaying: React.FC<any> = () => {

  const { loading,
    data,
    handleChangePage,
    hidden,
    initData,
    handleFilter
  } = useCallService<IMovie>(fetchMovie, [])
  
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
        handleFilter={handleFilter}
        initData={initData}
      />
    </div>
  )
}

export default NowPlaying;