

import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import PageWrapper from 'parts/PageWrapper';
import Loader from 'components/UI/Loader';
import RecommendedMovieList from 'components/RecommendedMovieList';
import MovieSummary from 'components/MovieSummary';
import MoviePlay from 'components/MoviePlay';

const MoviePlayList = ({ data }) => {

  const { currentEp, data64 } = data

  let data2 = Buffer.from(data64, 'base64').toString('utf-8')
  data2 = Buffer.from(data2, 'base64').toString('utf-8')
  data2 = Buffer.from(data2, 'base64').toString('utf-8')
  data2 = Buffer.from(data2, 'base64').toString('utf-8')
  data2 = Buffer.from(data2, 'base64').toString('utf-8')
  data2 = JSON.parse(data2)

  const { movie, eps, recommend } = data2


  return (
    <>
      <PageWrapper>
        <Head>
          <title>{`${movie.title} tập ${currentEp?.replace("tap-", "")} thuyết minh | hh3dhay`}</title>

          <meta property='description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />
          <meta property='og:description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />
          <meta property='twitter:description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />

          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />

          <meta property='og:image' content={`${movie.image}`} />
          <meta property='twitter:image' content={`${movie.image}`} />
        </Head>
        <MoviePlay
          movie={movie} eps={eps} currentEp={currentEp} />
        <RecommendedMovieList
          recommendedMovies={recommend} />
      </PageWrapper>

      {/* onclick */}
      <Script src="/js/onclick.js" />
      <Script data-cfasync="false" type="text/javascript" src="/js/onclick-adb.js" />
      <Script src="/js/onclick-adb-2.js" />
    </>
  );
};

export default MoviePlayList;


import "../../../../mongodb"
import Movie from '../../../../model/Movie';
import Epp from '../../../../model/Epp';
// import { getFromCache, saveToCache } from 'utils/cache/CacheHelper';
import CacheHelperUtils from "utils/cache/CacheHelperUtils";
import Script from 'next/script';

export async function getServerSideProps(context) {

  try {
    const { movieType, movieId, ep } = context.query;

    // cache
    const datacache = CacheHelperUtils.getFromCache(`${movieType}-${movieId}`, 15 * 60) // 5p
    if (datacache) {
      console.log("do");
      return { props: { data: { data64: datacache, currentEp: ep } } }
    }

    // lay phim hien tai
    let movie = (await Movie.findOne({ id: movieId }).then(res => res))
    if (movie) {
      movie = await movie.toObject()
    }
    // lay ds phim de xuat
    let movies = await Movie.find({ type: movieType }).limit(12).sort({ 'updateAt': "desc" }).then(res => res)
    // movies = movies.sort((a, b) => b.updateAt - a.updateAt)

    // lay ds tap phim
    let eps = await Epp.find({ movie_id: movieId }).then(res => res)
    eps = eps.sort((a, b) => b.index - a.index)

    const data = { movie, recommend: movies, eps };

    if (!data || !data?.movie) {
      return {
        notFound: true,
      }
    }

    var jsonString = JSON.stringify({ ...data });
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    let data2 = Buffer.from(jsonString).toString('base64');

    // {movie, eps, recommend}
    // chỉ cache movie va ds tập
    CacheHelperUtils.saveToCache(`${movieType}-${movieId}`, data2)

    return { props: { data: { data64: data2, currentEp: ep } } }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    }
  }


  function extractNumbersFromString(inputString) {
    var numbers = inputString.match(/\d+/g);
    numbers = numbers.map(Number);
    return numbers;
  }

}
