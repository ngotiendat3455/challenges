import { AxiosError } from 'axios'
import Loading from 'components/atoms/Loading'
import LazyLoad from 'components/molecules/LazyLoadImage'
// import Container from 'components/organisms/Container'
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { IMAGE_URL } from 'services/common/instance'
import { fetchDetailMovie } from 'services/movie'

const SingleMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<IMovie>()
    const fetchMovie = async () => {
        setIsLoading(true)
        try {
            const res = await fetchDetailMovie(Number(id))
            setData(res)
            setIsLoading(false)
        } catch (error) {
            const errorCode = (error as AxiosError).response?.status || 0;
            switch (errorCode) {
              case 503:
                // return <Errors statusCode={503} />;
                navigate('/error/500');
                break;
              case 500:
                navigate('/error/500');
                break;
              case 404:
                navigate('/error/404');
                break;
              case 403:
                navigate('/error/500');
                break;
              default:
                navigate('/error/500');
                break;
            }
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