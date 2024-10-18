import { useState } from "react";
import { array } from 'prop-types';
import Movie from './Movie';

const MovieList = (props) => {
    const [movies, setMovies] = useState(props.initialMovies);

    return (
        <div>
            <h2>Favorite Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <Movie key={index} title={movie.title} details={movie.details} />
                ))}
            </ul>
        </div>
    )
}

MovieList.defaultProps = {
    initialMovies: [
        {title: 'The Silence of the Lambs', details: 'details1'}, 
        {title: 'Hannibal', details: 'details2'}, 
        {title: 'Scream', details: 'details3'}, 
        {title: 'Halloween', details: 'details4'}
    ]
}

MovieList.propTypes = {
    initialMovies: array
}

export default MovieList;