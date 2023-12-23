
import { Element } from 'react-scroll';

import Header from 'parts/Header';
import NotFound from 'parts/NotFound';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Loader from 'components/UI/Loader';
import { SCROLL_TO_ELEMENT } from 'utils/constants';

const RecommendedMovieList = ({
  recommendedMovies,
}) => (
  <PaddingWrapper>
    <Element name={SCROLL_TO_ELEMENT}>
      <Header
        title='Phim đề xuất'
      />
    </Element>

    <MovieList
      movies={recommendedMovies} />

  </PaddingWrapper>
);

export default RecommendedMovieList;
