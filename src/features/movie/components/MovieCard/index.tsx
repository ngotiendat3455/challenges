import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const MovieCard: React.FC<any> = ({ product }) => {
    const { id, image, name, price, description } = product

    return (
        <div className='movie'>
            <div className='container'>
                <img src={image} alt={name} />
                <Link to={`/products/${id}`} className='link'>
                    <FaSearch />
                </Link>
            </div>
            <footer>
                <h5>{name}</h5>
                <p>123</p>
            </footer>
        </div>
    )
}

export default MovieCard