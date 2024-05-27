import React from 'react'
import MovieCard from '../MovieCard'
import Animate from 'components/organisms/Animate'

const GridView:React.FC<{
    products: IMovie[]
}> = ({ products }) => {
    return (
        <div className='gridView'>
            <div className='products-container'>
                {products.map((product: IMovie, index) => {
                    return (
                        <Animate type="fadeInUp" animationDelay={`${0.1 * index}s`} defaultDivideScreen={1.3}>
                            <MovieCard key={product.id} product={product} />
                        </Animate>
                    )
                })}
            </div>
        </div>
    )
}

export default GridView