import React from 'react'
import { Link } from 'react-router-dom'
const ListView: React.FC<any> = ({ products }) => {
    return (
        <div className='movieList'>
            {products.map((product: any) => {
                const { id, image, name, price, description } = product
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h5 className='price'>123</h5>
                            <p>{description.substring(0, 150)}...</p>
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