const axios = require('axios');
const keys = require('../config/index');


let datas = {};


const getDatas = (req, res) => {
    axios.get('https://api.themoviedb.org/3/tv/popular', {
        params : {
        api_key: keys.API_KEY,
        language: "en-US"}
    })
    .then(response => {
        datas.popularSeries = [];
        datas.popularSeries = datas.popularSeries.concat(response.data.results);
       
        return datas;
    })
    .then(data => { 
        axios.get('https://api.themoviedb.org/3/movie/popular', {
            params:{
                api_key: keys.API_KEY,
                language: "en-US"
            }
        })
        .then(response => {
            datas.popularMovies = [];
            datas.popularMovies = datas.popularMovies.concat(response.data.results);

            return datas;
        })
        .then(data => {
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: keys.API_KEY,
                    language: "en-US",
                    sort_by: "popularity.desc",
                    with_genres: 27
                }
            })
            .then(response => {
                datas.horrorMovies = [];
                datas.horrorMovies = datas.horrorMovies.concat(response.data.results);

                return datas;
            })
            .then(data => {
                axios.get('https://api.themoviedb.org/3/discover/tv', {
                    params: {
                        api_key: keys.API_KEY,
                        language: "en-US",
                        sort_by: "popularity.desc",
                        with_genres: 16,
                        with_original_language: "ja"
                    }
                })
                .then(response => {
                    datas.anime = [];
                    datas.anime = data.anime.concat(response.data.results);

                    return res.json(datas);
                })
                .catch(err => console.log('Problem'));
            })
        })
    })
}


module.exports = {
    getDatas
};