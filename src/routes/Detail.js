import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss'

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState('');
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    })

    return (
        <div className='movie-detail'>
            {loading ? (
                <div class="loader">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                ) : (
                    <div className='movies'>
                        <h2 className='title'>{movie.title_long}</h2>
                        <div className='img-box'>
                            <img src={movie.large_cover_image} alt={movie.title}></img>
                        </div>
                        <div className='content'>
                            <div className='info'>
                                <span className='movie-title'>{movie.title}</span>
                                <span className='movie-rating'>평점 : {movie.rating}</span>
                                <span className='movie-runtime'>시간 : {movie.runtime} 시간</span>
                            </div>
                            <div className='genres'>
                                <ul className='list'>
                                    <span className='genre'>장르 :&nbsp;</span>
                                    {
                                        movie.genres.map((genre, idx) => (<li key={idx}>{genre}</li>))
                                    }
                                </ul>
                            </div>
                            <div className='summarys'>
                                <p className='summary'>내용 : {movie.description_full}</p>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Detail;
