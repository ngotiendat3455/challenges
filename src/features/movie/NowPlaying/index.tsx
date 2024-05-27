import React, { createRef } from 'react';
import MovieTemplate from '../components/MovieTemplate';
import useCallService from 'hooks/useCallService';
import { fetchMovie } from 'services/movie';
// import Loading from 'components/atoms/Loading';

// const callElementLastListVideo = (
//   nodeVideo: HTMLDivElement | null,
//   refObserverVideo: React.MutableRefObject<IntersectionObserver | undefined>,
//   params: number,
//   setParams: React.Dispatch<React.SetStateAction<number>>,
// ) => {
//   // eslint-disable-next-line no-param-reassign
//   refObserverVideo.current = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//       setParams(params);
//     }
//   }, { threshold: 1.0 });
//   if (nodeVideo) refObserverVideo.current.observe(nodeVideo);
// };
const NowPlaying: React.FC<any> = () => {
  // const elRefs = React.useRef<React.RefObject<any>[]>([]);

  const { loading,
    data,
    handleChangePage,
    pagination,
    hidden
  } = useCallService(fetchMovie, [])
  console.log('data', data)
  return (
    <div>
      <MovieTemplate
        isLoading={loading}
        onLoadMore={() => handleChangePage()}
        disabledButtonLoadMore={hidden}
        movies={data}
      />
    </div>
  )
}

export default NowPlaying;