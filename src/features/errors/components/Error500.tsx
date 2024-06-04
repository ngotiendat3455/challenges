import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import error500 from 'assets/images/error500.png';
import Container from 'components/organisms/Container';
const Error500: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        {/* begin::Title */}
        <h1 className='fw-bolder fs-2qx text-gray-900 mb-4'>System Error</h1>
        {/* end::Title */}

        {/* begin::Text */}
        <div className='fw-semibold fs-6 text-gray-500 mb-7'>
          Something went wrong! Please try again later.
        </div>
        {/* end::Text */}

        {/* begin::Illustration */}
        <div className='mb-11'>
          <img
            className='mw-100 mh-300px theme-light-show'
            alt=''
            src={error500}
          />
          {/* <img
          className='mw-100 mh-300px theme-dark-show'
          alt=''
        /> */}
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

export { Error500 }
