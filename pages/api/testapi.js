import "../../mongodb"

import Movie from '../../model/Movie';
import CacheHelperUtils from "utils/cache/CacheHelperUtils";
// import { getFromCache, saveToCache } from '../../utils/cache/CacheHelper'

export default async function handler(req, res) {
  try {
    
    console.log("init data");
    const datacache = CacheHelperUtils.getFromCache("hoat-hinh-3d", 60 * 15) // 5p
    if (datacache) {
      res.status(200).json({
        success: true,
        cache:true
      })
      return;
    }

    let data = await Movie.find({ type: "hoat-hinh-3d" }).sort({ 'updateAt': "desc" }).then(res => res)

    if (!data) {
      res.status(200).json({
        success: false
      })
      return;
    }

    var jsonString = JSON.stringify(data);
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    jsonString = Buffer.from(jsonString).toString('base64');
    let movies = Buffer.from(jsonString).toString('base64');
    // Pass data to the page via props
    CacheHelperUtils.saveToCache("hoat-hinh-3d", { movies })
    console.log("nap cache");
    res.status(200).json({
      success: true,
      db:true
    })
  } catch (error) {
    console.log(error);
    res.status(200).json({
      fail: true
    })
  }


}
