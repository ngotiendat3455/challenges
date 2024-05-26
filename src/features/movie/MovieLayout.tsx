import Container from 'components/organisms/Container'
import {Outlet} from 'react-router-dom'

const MovieLayout = () => {
  return (
    <Container>
        <Outlet />
    </Container>
  )
}

export {MovieLayout}
