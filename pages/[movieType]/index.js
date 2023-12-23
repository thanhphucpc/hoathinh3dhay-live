import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'parts/Header';
import PageWrapper from 'parts/PageWrapper';
import PaddingWrapper from 'parts/PaddingWrapper';
import MovieList from 'components/MovieList';
import Head from 'next/head'
import { dataMovie } from "data/movies"

const Home = ({ movies }) => {

    let movies2 = Buffer.from(movies, 'base64').toString('utf-8')
    movies2 = Buffer.from(movies2, 'base64').toString('utf-8')
    movies2 = Buffer.from(movies2, 'base64').toString('utf-8')
    movies2 = Buffer.from(movies2, 'base64').toString('utf-8')
    movies2 = Buffer.from(movies2, 'base64').toString('utf-8')
    movies2 = JSON.parse(movies2)

    const dispatch = useDispatch();

    const { query } = useRouter();

    // const categoryName = query[QUERY_PARAMS.CATEGORY];
    // const page = Number(query[QUERY_PARAMS.PAGE]);

    return (
        <>
            <PageWrapper>
                <Head>
                    <title>{`Phim hay thuyết minh hoạt hình Trung Quốc | HHTM`}</title>

                    <meta name='title' content='Phim hay thuyết minh hoạt hình Trung Quốc | HHTM' />
                    <meta name="description" content="hh3dhay xem phim thuyết minh, lồng tiếng online cập nhất phim mới nhanh nhất Full HD. Xem phim thuyết minh tại hhtm.live" />
                    {/* Open Graph / Facebook */}
                    <meta property='og:type' content='website' />
                    <meta property='og:url' content='https://hhtm.live' />
                    <meta property='og:title' content='Phim hay thuyết minh hoạt hình Trung Quốc | HHTM' />
                    <meta property='og:description' content='hh3dhay xem phim thuyết minh, lồng tiếng online cập nhất phim mới nhanh nhất Full HD. Xem phim thuyết minh tại hhtm.live' />
                    <meta property='og:image' content='https://hhtm.tv/upload/product/2023_30_07_20_12_54-Fan-Ren-Xiu-Xian-Zhuan.jpg' />
                    <meta property='og:image:width' content='1200' />
                    <meta property='og:image:height' content='628' />

                    {/* Twitter */}
                    <meta property='twitter:card' content='summary_large_image' />
                    <meta property='twitter:url' content='https://hhtm.live' />
                    <meta property='twitter:title' content='Phim hay thuyết minh hoạt hình Trung Quốc | HHTM' />
                    <meta property='twitter:description' content='hh3dhay xem phim thuyết minh, lồng tiếng online cập nhất phim mới nhanh nhất Full HD. Xem phim thuyết minh tại hhtm.live' />
                    <meta property='twitter:image' content='https://hhtm.tv/upload/product/2023_30_07_20_12_54-Fan-Ren-Xiu-Xian-Zhuan.jpg' />

                </Head>

                <PaddingWrapper>
                    <Header title={"Hoạt hình 3D TQ"} />
                    <MovieList movies={movies2} />
                </PaddingWrapper>
            </PageWrapper>
        </>
    );
};

export default Home;

import "../../mongodb"
import Movie from '../../model/Movie';
// import { getFromCache, saveToCache } from 'utils/cache/CacheHelper';
import CacheHelperUtils from "utils/cache/CacheHelperUtils";

export async function getServerSideProps(context) {

    try {
        // Fetch data from external API
        const { movieType } = context.query;
        if (movieType != "hoat-hinh-3d") {
            return {
                notFound: true,
            }
        }
        // cache
        const datacache = CacheHelperUtils.getFromCache("hoat-hinh-3d", 60 * 15) // 5p
        if (datacache) {
          return { props: datacache}
        }

        let data = await Movie.find({ type: "hoat-hinh-3d" }).sort({ 'updateAt': "desc" }).then(res => res)

        if (!data) {
          return {
            notFound: true,
          }
        }

        var jsonString = JSON.stringify(data);
        jsonString = Buffer.from(jsonString).toString('base64');
        jsonString = Buffer.from(jsonString).toString('base64');
        jsonString = Buffer.from(jsonString).toString('base64');
        jsonString = Buffer.from(jsonString).toString('base64');
        let movies = Buffer.from(jsonString).toString('base64');

        CacheHelperUtils.saveToCache("hoat-hinh-3d", { movies })
        // Pass data to the page via props
        return { props: { movies } }
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        }
    }

}