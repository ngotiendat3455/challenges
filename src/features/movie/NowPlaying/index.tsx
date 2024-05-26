import React from 'react';
import MovieTemplate from '../components/MovieTemplate';

const NowPlaying:React.FC<any> = () => {
    console.log('handle something');
    return (
        <div>
            <MovieTemplate />
        </div>
    )
}

export default NowPlaying;