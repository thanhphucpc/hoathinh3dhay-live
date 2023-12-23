

import SummaryWrapper from 'parts/SummaryWrapper';
import MovieArtwork from './MovieArtwork';
import { W780H1170 } from 'config/image-sizes';
import dynamic from 'next/dynamic';
const MovieInfo = dynamic(() => import('./MovieInfo'));


const MovieSummary = ({
  movie,
  eps
}) => (
  <SummaryWrapper>
    <MovieArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={`${movie.image}`} />
    <MovieInfo
      movie={movie} eps={eps}  />
  </SummaryWrapper>
);

export default MovieSummary;
