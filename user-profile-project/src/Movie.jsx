import { useState } from "react";
import { string } from 'prop-types';
import MovieList from "./MovieList";

const Movie = ({ title, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    const removeMovie = (movieToRemove) => {
        const updatedList = MovieList.props.filter(movie => movie !== movieToRemove);
        MovieList.props.setMovies(updatedList);
    };

    return (
        <li>
            <button type="button" onClick={() => removeMovie(Movie)}>
                    Remove
            </button>
            <button onClick={() => setShowDetails(!showDetails)}>
                {title}
            </button>
            {showDetails && (
                <>
                    <p>
                        {details}
                    </p>
                </>
            )}
        </li>
    );
};



Movie.propTypes = {
    title: string,
    details: string
}

export default Movie;