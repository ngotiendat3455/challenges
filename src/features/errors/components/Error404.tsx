import { FC } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import error404 from 'assets/images/error404.png';
import Container from 'components/organisms/Container';

const Error404: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        {/* begin::Title */}
        <h1 className='fw-bolder fs-2hx text-gray-900 mb-4'>Oops!</h1>
        {/* end::Title */}

        {/* begin::Text */}
        <div className='fw-semibold fs-6 text-gray-500 mb-7'>We can't find that page.</div>
        {/* end::Text */}

        {/* begin::Illustration */}
        <div className='mb-3'>
          <img
            src={error404}
            className='mw-100 mh-300px theme-light-show'
            alt=''
            style={{
              maxWidth: '300px',
              minWidth: '300px'
            }}
          />
        </div>
        {/* end::Illustration */}

        {/* begin::Link */}
        <div className='mb-0'>
          <button onClick={() => navigate(-1)} className='btn btn-sm btn-primary'>
            Return Home
          </button>
        </div>
        {/* end::Link */}
      </Container>
    </>
  )
}

export { Error404 }
