import Loading from 'components/atoms/Loading'
import LazyLoad from 'components/molecules/LazyLoadImage'
import Container from 'components/organisms/Container'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IMAGE_URL } from 'services/common/instance'
import { fetchDetailMovie } from 'services/movie'

const SingleMovie = () => {
    const { id } = useParams()
    console.log('id', id);
    const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState({ show: false, msg: '' })
    const [data, setData] = useState<IMovie>()
    const fetchMovie = async () => {
        setIsLoading(true)
        try {
            console.log('id', id);
            const res = await fetchDetailMovie(id)
            setData(res)

            // setError({ show: false, msg: '' })
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [id])

    if (isLoading) {
        return <Loading variant="fullScreen" isShow />
    }

    const { title, poster_path, overview, vote_average } = data!
    return (
        <section className='single-movie'>
            <LazyLoad
                key={id}
                src={`${IMAGE_URL}${poster_path}`}
                alt={title}
                type="src"
                loadedClassName={"loaded"}
            // style={{
            //     height: 'calc(300px/1.78)',
            //     backgroundPosition: '50% 50%',
            //     backgroundSize: 'cover'
            // }}
            />
            <div className='single-movie-info'>
                <h2>{title}</h2>
                <p>{overview}</p>
                <h4>{vote_average}</h4>
                <Link to='/' className='btn'>
                    back to movies
                </Link>
            </div>
        </section>
    )
}

export default SingleMovie