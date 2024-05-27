import usePaginate from 'hooks/useCallService';
import React from 'react';
import MovieTemplate from '../components/MovieTemplate';
import { fetchMoviePopular } from 'services/movie';
import Loading from 'components/atoms/Loading';

const TopMovie: React.FC<any> = () => {
    const { loading,
        data,
        handleChangePage,
        hidden,
        initData,
        handleFilter
    } = usePaginate(fetchMoviePopular, [])

    if (!initData) {
        return <Loading variant="fullScreen" isShow />
    }
    return (
        <div>
            <MovieTemplate
                handleFilter={handleFilter}
                isLoading={loading}
                onLoadMore={() => handleChangePage()}
                disabledButtonLoadMore={hidden}
                movies={data}
            />
        </div>
    )
}

export default TopMovie;