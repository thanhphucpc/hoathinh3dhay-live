

import SummaryWrapper from 'parts/SummaryWrapper';
import MovieArtwork from './MovieArtwork';
import { W780H1170 } from 'config/image-sizes';
import dynamic from 'next/dynamic';
const MovieInfoPlay = dynamic(() => import('./MovieInfoPlay'));


const MoviePlay = ({
  movie,
  eps,
  currentEp
}) => (
  <>
    {/* <MovieArtwork
      width={W780H1170.WIDTH}
      height={W780H1170.HEIGHT}
      src={`${movie.image}`} /> */}
 
    <MovieInfoPlay
      movie={movie} eps={eps} currentEpId={currentEp} />
  </>
);

export default MoviePlay;
