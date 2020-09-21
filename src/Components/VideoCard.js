import React, {forwardRef, useState} from 'react'
import './Styles/VideoCard.css';
import TextTruncate from "react-text-truncate";
import ThumbUpSharp from '@material-ui/icons/ThumbUpSharp'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";




const VideoCard = forwardRef(({ movie }, ref) => {

    const [trailerUrl, setTrailerUrl] = useState("");

    const opts= {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = () => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }




    return (
        <div ref={ref} className="videoCard">
               <img
                onClick={() => handleClick(movie)}
                src={`${base_url}${movie.backdrop_path || movie.poster_path} `}
                alt="movie poster"/>

            <TextTruncate
                line={1}
                element="p"
                truncateText="…"
                text={movie.overview}
            />

            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} • <ThumbUpSharp />{" "}
                {movie.vote_count}
            </p>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
});

export default VideoCard
