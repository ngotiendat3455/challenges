import usePaginate from 'hooks/useCallService';
import React from 'react';
import MovieTemplate from '../components/MovieTemplate';
import { fetchMoviePopular } from 'services/movie';
import Loading from 'components/atoms/Loading';

const TopMovie: React.FC<any> = () => {
    const { loading,
        data,
        handleChangePage,
        pagination,
        hidden,
        initData
    } = usePaginate(fetchMoviePopular, [])
    console.log('initData', initData, data);
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

export default TopMovie;