

import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

import PageWrapper from 'parts/PageWrapper';
import Loader from 'components/UI/Loader';
import RecommendedMovieList from 'components/RecommendedMovieList';
import MovieSummary from 'components/MovieSummary';
import Script from 'next/script'

const MovieDetail = ({ data }) => {

  let data2 = Buffer.from(data, 'base64').toString('utf-8')
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
          <title>{`${movie.title} | HHTM - Phim hay thuyết minh`}</title>
          <meta property='description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />
          <meta property='og:description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />
          <meta property='twitter:description' content={`${movie.overview.substring(0, 500).replace('<strong>', "").replace('</strong>', "").replace('</br>', "")}`} />

          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='628' />

          <meta property='og:image' content={`${movie.image}`} />
          <meta property='twitter:image' content={`${movie.image}`} />

        </Head>
        <MovieSummary
          movie={movie} eps={eps} />
        <RecommendedMovieList
          recommendedMovies={recommend} />
      </PageWrapper>

      {/* onclick */}
      {/* <Script src="/js/onclick.js" />
      <Script data-cfasync="false" type="text/javascript" src="/js/onclick-adb.js"/>
      <Script src="/js/onclick-adb-2.js"/> */}

    </>

  );
};

export default MovieDetail;


import "../../../mongodb"
import Movie from '../../../model/Movie';
import Epp from '../../../model/Epp';
// import { getFromCache, saveToCache } from 'utils/cache/CacheHelper';
import CacheHelperUtils from "utils/cache/CacheHelperUtils";


export async function getServerSideProps(context) {

  try {
    const { movieType, movieId } = context.query;

    // cache
    const datacache = CacheHelperUtils.getFromCache(`${movieType}-${movieId}`, 60 * 15) // 5p
    if (datacache) {
      return { props: { data: datacache } }
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

    var jsonString = JSON.stringify(data);
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    let data2 = Buffer.from(jsonString).toString('base64');

    CacheHelperUtils.saveToCache(`${movieType}-${movieId}`, data2)
    // {movie, eps, recommend}
    return { props: { data: data2 } }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    }
  }

}
