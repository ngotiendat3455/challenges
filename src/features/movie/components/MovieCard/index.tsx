import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { IMAGE_URL } from 'services/common/instance'
import Skeleton from 'react-loading-skeleton';
import LazyLoad from 'components/molecules/LazyLoadImage';

export const MovieSkeleton = () => {
    return (
        <>
            <div className='movie'>
                <div className='container'>
                    <Skeleton baseColor="#EFF1F6" circle height="100%" containerClassName="avatar-skeleton" />
                </div>
                <footer>
                    <h5>
                        <Skeleton baseColor="#EFF1F6" width={120} height={20} />
                    </h5>
                </footer>
            </div>
        </>
    );
};

const MovieCard: React.FC<{
    product: IMovie
}> = ({ product }) => {
    const { id, title, poster_path } = product

    return (
        <div className='movie'>
            <div className='container'>
                <LazyLoad
                    key={id}
                    src={`${IMAGE_URL}${poster_path}`}
                    alt={title}
                    type="background"
                    loadedClassName={"loaded"}
                    style={{
                        height: 'calc(300px/1.78)'
                    }}
                />
                <Link to={`/products/${id}`} className='link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{title}</h5>
            </footer>
        </div>
    )
}

export default MovieCard