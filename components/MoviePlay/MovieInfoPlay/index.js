

import InfoWrapper from 'parts/InfoWrapper';
import Header from 'parts/Header';
import BasicsSection from './BasicsSection';
import TheGenresSection from './TheGenresSection';
import TheSynopsisSection from './TheSynopsisSection';
import SIZE_TYPES from 'utils/constants/size-types';
import withTheme from 'utils/hocs/withTheme';
import TheEp from './TheEp';
import { useState, useEffect } from 'react';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import Button from 'components/UI/Button';
import SummarySectionHeading from 'parts/SummarySectionHeading';


const MovieInfo = ({ theme, movie, eps, currentEpId }) => {

  const getCurrentEp = (currentEpId) => {
    let ep = eps.filter(e => e.id == currentEpId)[0]
    return ep;
  }
  const [height, setHeight] = useState(0)
  const [linkVideo, setLinkVideo] = useState(getCurrentEp(currentEpId)?.link[0])
  const [currentEp, setCurrentEp] = useState(getCurrentEp(currentEpId))


  useEffect(() => {
    if (window) {
      window.addEventListener('load', () => {
        console.log(window.innerHeight, window.innerWidth)
        setHeight(extraHeight(window.innerWidth))
      })
      setTimeout(() => {
        setHeight(extraHeight(window.innerWidth))
      }, 500)
    }
  }, [])



  function extraHeight(width) {
    if (width > 2000) {
      return 750;
    }
    if (width > 1500) {
      return 600;
    }
    if (width > 1300) {
      return 600;
    }
    if (width > 1200) {
      return 550;
    }
    if (width > 700) {
      return 400;
    }
    if (width > 500) {
      return 300;
    }
    if (width > 400) {
      return 250;
    }
    return 200;
  }


  function extractNumbersFromString(inputString) {
    var numbers = inputString.match(/\d+/g);
    numbers = numbers.map(Number);
    return numbers;
  }

  return (
    <>
      <InfoWrapper>
        <Header
          size={SIZE_TYPES.LARGE}
          title={movie.title}
          subtitle={`Tập ${currentEpId.replace('tap-', '')}`} />

        {height == 0 ? <LoadingSpinner /> :
          <iframe
            src={linkVideo}
            width="100%"
            title={movie.title}
            allowFullScreen={true}
            loading
            height={height}
          />}

        <br />
        <br />
        <br />
        <SummarySectionHeading>Đổi link nếu không xem được</SummarySectionHeading>
        <div style={{ display: "flex", flexDirection: 'row' }}>
          {currentEp?.link.map((e, index) => (<div key={index} style={{ marginRight:8}}><Button key={index} active={e == linkVideo} title={`Link ${index + 1}`} onClick={() => { setLinkVideo(e) }} /></div>))}
        </div>
        <br />
        <br />
        <br />

        <TheEp
          className='the-synopsis-section-bottom-margin'
          eps={eps} movie={movie} currentEpId={currentEpId} />
        <BasicsSection
          className='basic-section-bottom-margin'
          voteAverage={movie.vote_average}
          spokenLanguages={movie.spoken_languages}
          runtime={movie.runtime}
          releaseDate={movie.release_date} />
        <TheGenresSection
          className='the-genres-section-bottom-margin'
          genres={movie.genres} />
        <TheSynopsisSection
          className='the-synopsis-section-bottom-margin'
          movieName={ `${movie.title} Tập ${currentEpId.replace('tap-', '')} thuyết minh`}
          synopsis={movie.overview || ''} />



        {/* <TheCastSection
        className='cast-section-bottom-margin'
        cast={movie.cast}
        baseUrl={"baseUrl"} /> */}
        {/* <MovieAdSection
        websiteUrl={movie.homepage}
        imdbId={movie.imdb_id}
        videos={movie.videos.results} /> */}
      </InfoWrapper>
      <style jsx>{`
      :global(.basic-section-bottom-margin) {
        margin-bottom: 1rem;
      }

      :global(.the-genres-section-bottom-margin) {
        margin-bottom: 2rem;
      }

      :global(.the-synopsis-section-bottom-margin) {
        margin-bottom: 3rem;
      }

      :global(.cast-section-bottom-margin) {
        margin-bottom: 5rem;
      }

      @media ${theme.mediaQueries.smaller} {
        :global(.basic-section-bottom-margin) {
          margin-bottom: 3rem;
        }
      }
    `}</style>
    </>
  )
}

export default withTheme(MovieInfo);
