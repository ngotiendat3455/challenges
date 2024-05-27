import React from 'react'
import MovieCard from '../MovieCard'

const GridView:React.FC<{
    products: IMovie[]
}> = ({ products }) => {
    return (
        <div className='gridView'>
            <div className='products-container'>
                {products.map((product: IMovie) => {
                    return <MovieCard key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default GridView