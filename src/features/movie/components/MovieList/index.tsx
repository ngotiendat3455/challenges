import LazyLoad from 'components/molecules/LazyLoadImage'
import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from 'services/common/instance'
const ListView: React.FC<{
    products: IMovie[]
}> = ({ products }) => {
    return (
        <div className='movieList'>
            {products.map((product: IMovie) => {
                const { id, title, overview, poster_path, vote_average } = product
                return (
                    <article key={id}>
                        {/* <img src={`${IMAGE_URL}${poster_path}`} alt={title} /> */}
                        <LazyLoad
                            key={id}
                            src={`${IMAGE_URL}${poster_path}`}
                            alt={title}
                            type="src"
                            loadedClassName={"loaded"}
                        />
                        <div>
                            <h4>{title}</h4>
                            <h5 className='price'>{vote_average}</h5>
                            <p>{overview.substring(0, 150)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ListView