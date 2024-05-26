import React from 'react'
import MovieCard from '../MovieCard'

const GridView:React.FC<any> = ({ products }) => {
    return (
        <div className='gridView'>
            <div className='products-container'>
                {products.map((product: any) => {
                    return <MovieCard key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default GridView