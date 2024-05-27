import Container from 'components/organisms/Container';
import React from 'react';
import SearchForm from '../SearchForm';
import Sort from '../Sort';
import ListView from '../MovieList';
import GridView from '../GridView';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import { MovieSkeleton } from '../MovieCard';

const Movies = ({
    gridView,
    movieList
}: any) => {
    if (gridView === false) {
        return <ListView products={movieList} />
    }
    return <GridView products={movieList} />
}

const MovieTemplate: React.FC<any> = ({
    isLoading,
    disabledButtonLoadMore,
    onLoadMore,
    movies
}) => {
    const [gridView, setGridView] = React.useState(true);
    // const [movies, setMovies] = React.useState(temp);


    return (
        <div className='MovieTemplate'>
            <SearchForm />
            <Sort
                setGridView={() => {
                    setGridView(true)
                }}
                grid_view={gridView}
                products={movies}
                setListView={() => {
                    setGridView(false)
                }}
            />
            {!isLoading && movies.length > 1 && (
                <Movies
                    gridView={gridView}
                    movieList={movies}
                />
            )}
            {isLoading &&
                !movies.length &&
                [1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index}>
                        <MovieSkeleton />
                    </div>
                ))}
            {/* {isLoading && movies.length < 1 && (
                (
                    <h5 className='MovieTemplate-text' style={{ textTransform: 'none' }}>
                        Sorry, no movies matched your search.
                    </h5>
                )
            )} */}
            <div className="MovieTemplate-news_actions">
                {isLoading && (
                    <div className="MovieTemplate-news_actions_icon">
                        <Icon iconName="loading" />
                    </div>
                )}
                {!disabledButtonLoadMore && (
                    <div className="MovieTemplate-news_actions_button">
                        <Button modifiers={['600', 'bgWhite', 'inline']} onClick={onLoadMore}>
                            Show More
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MovieTemplate;