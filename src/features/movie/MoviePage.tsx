/* eslint-disable jsx-a11y/anchor-is-valid */
import {Route, Routes} from 'react-router-dom'
import { MovieLayout } from './MovieLayout'
import TopMovie from './TopMovie'
import NowPlaying from './NowPlaying'

const MoviePage = () => (
  <Routes>
    <Route element={<MovieLayout />}>
      <Route path='top-movie' element={<TopMovie />} />
      <Route path='now-playing' element={<NowPlaying />} />
      <Route index element={<NowPlaying />} />
    </Route>
  </Routes>
)

export {MoviePage}
