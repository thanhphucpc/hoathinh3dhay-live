
import LazyLoad from 'react-lazyload';

import PosterLink from 'components/PosterLink';
import Scenery from 'components/Scenery';
import DetailsPanelWrapper from 'components/DetailsPanelWrapper';
import PosterTitle from 'components/PosterTitle';
import RatingInfo from './RatingInfo';
import LINKS from 'utils/constants/links';
import CLASS_NAMES from 'utils/constants/class-names';
import { W342H513 } from 'config/image-sizes';
import QUERY_PARAMS from 'utils/constants/query-params';

const POSTER_LINK_CLASS_NAME = 'poster-link';
const POSTER_TITLE_CLASS_NAME = 'poster-title-color';
const RATING_INFO_CLASS_NAME = 'rating-info-color';

const MovieListItem = ({
  theme,
  movie,
  baseUrl,
  fetchpriority
}) => (
  <>
    <LazyLoad
      height={200}
      offset={1400}>
      <PosterLink
        className={POSTER_LINK_CLASS_NAME}
        href={`/${movie.type}/${movie.id}`}>
        <Scenery
          width={W342H513.WIDTH}
          height={W342H513.HEIGHT}
          fetchpriority={fetchpriority}
          src={movie.image} />
        {/* ,  backgroundImage: linear-gradient(to right, orange, purple, blue) */}

        <div
          style={{ position: "absolute", top: 5, left: 5, backgroundColor: "beige",backgroundImage: "linear-gradient(to right, orange, purple, blue)" }}>
          <p style={{ color: "white", fontSize: 12, padding: 2 }}>
            {movie.new_epp}
          </p>
        </div>
        <DetailsPanelWrapper theme={theme}>
          <PosterTitle
            theme={theme}
            overview={`${movie.overview.substring(0, 200).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`}
            className={POSTER_TITLE_CLASS_NAME}>
            {movie.title}
          </PosterTitle>
          {/* <RatingInfo
            className={RATING_INFO_CLASS_NAME}
            voteAverage={movie.vote_average}
            tooltip={`${movie.overview.substring(0,150).replace('<strong>',"").replace('</strong>',"").replace('</br>',"")}`} /> */}
        </DetailsPanelWrapper>
      </PosterLink>
    </LazyLoad>
    <style jsx>{`
      :global(.${POSTER_LINK_CLASS_NAME}:hover .${CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER}) {
        box-shadow: ${theme.shadows[0]};
        border-radius: 0;
      }

      :global(.${POSTER_LINK_CLASS_NAME}:hover .${POSTER_TITLE_CLASS_NAME}) {
        color: var(--palette-text-primary);
      }

      :global(.${POSTER_LINK_CLASS_NAME}:hover .${RATING_INFO_CLASS_NAME} .${CLASS_NAMES.RATING}) {
        color: var(--palette-warning-light);
      }
    `}</style>
  </>
);

export default MovieListItem;
