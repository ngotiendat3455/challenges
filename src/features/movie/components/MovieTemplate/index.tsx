import Container from 'components/organisms/Container';
import React from 'react';
import SearchForm from '../SearchForm';
import Sort from '../Sort';
import ListView from '../MovieList';
import GridView from '../GridView';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import Animate from 'components/organisms/Animate';
// import { MovieSkeleton } from '../MovieCard';

const Movies = ({
    gridView,
    movieList
}: {
    gridView: boolean,
    movieList: IMovie[]
}) => {
    if (gridView === false) {
        return <ListView products={movieList} />
    }
    return <GridView products={movieList} />
}

interface IMovieTemplate {
    isLoading: boolean,
    disabledButtonLoadMore: boolean,
    onLoadMore:() => void,
    movies: IMovie[],
    handleFilter: (text: string) => void,
    initData: boolean
}
const MovieTemplate: React.FC<IMovieTemplate> = ({
    isLoading,
    disabledButtonLoadMore,
    onLoadMore,
    movies,
    handleFilter,
    initData
}) => {
    const [gridView, setGridView] = React.useState(true);

    return (
        <div className='MovieTemplate'>
            <Animate type="fadeIn" animationDelay={`${0.15}s`} defaultDivideScreen={1.3}>
                <SearchForm handleFilter={handleFilter} />
            </Animate>
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
            {movies.length >= 1 && (
                <Movies
                    gridView={gridView}
                    movieList={movies}
                />
            )}

            {initData && movies.length < 1 && (
                (
                    <h5 className='MovieTemplate-text' style={{ textTransform: 'none' }}>
                        Sorry, no movies matched your search.
                    </h5>
                )
            )}
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