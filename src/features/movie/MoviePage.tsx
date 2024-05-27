/* eslint-disable jsx-a11y/anchor-is-valid */
import {Route, Routes} from 'react-router-dom'
import { MovieLayout } from './MovieLayout'
import TopMovie from './TopMovie'
import NowPlaying from './NowPlaying'
import SingleMovie from './SingleMovie'

const MoviePage = () => (
  <Routes>
    <Route element={<MovieLayout />}>
      <Route path='top-movie' element={<TopMovie />} />
      <Route path='now-playing' element={<NowPlaying />} />
      <Route path='top-movie/:id' element={<SingleMovie />} />
      <Route path='now-playing/:id' element={<SingleMovie />} />
      {/* <Route index element={<NowPlaying />} /> */}
    </Route>
  </Routes>
)

export default MoviePage
