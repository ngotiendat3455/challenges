import LazyLoad from 'components/molecules/LazyLoadImage'
import Animate from 'components/organisms/Animate'
import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_URL } from 'services/common/instance'



const ListView: React.FC<{
    products: IMovie[]
}> = ({ products }) => {
    return (
        <div className='movieList'>
            {products.map((product: IMovie, index) => {
                const { id, title, overview, poster_path, vote_average } = product
                return (
                    <Animate type="fadeInUp" animationDelay={`${0.15 * index}s`} defaultDivideScreen={1.3}>
                        <article key={id}>
                            {/* <img src={`${IMAGE_URL}${poster_path}`} alt={title} /> */}
                            <LazyLoad
                                key={id}
                                src={`${IMAGE_URL}${poster_path}`}
                                alt={title}
                                type="src"
                                loadedClassName={"loaded"}
                                style={{
                                    height: 'calc(300px/1.78)',
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover'
                                }}
                            />
                            <div>
                                <h4>{title}</h4>
                                <h5 className='price'>{vote_average}</h5>
                                <p>{overview.substring(0, 150)}...</p>
                                <Link to={`${id}`} className='btn'>
                                    Details
                                </Link>
                            </div>
                        </article>
                    </Animate>
                )
            })}
        </div>
    )
}

export default ListView