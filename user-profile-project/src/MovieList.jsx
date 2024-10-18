import { useState } from "react";
import FilterButton from './FilterButton';
import './App.css'

const FILTER_MAP = {
    All: () => true,
    Action: (movie) => movie.genre === 'Action',
    Adventure: (movie) => movie.genre === 'Adventure',
    Horror: (movie) => movie.genre === 'Horror',
    Thriller: (movie) => movie.genre === 'Thriller',
    Comedy: (movie) => movie.genre === 'Comedy',
    Drama: (movie) => movie.genre === 'Romance',
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const MovieList = () => {
    const [movies, setMovies] = useState([
        {title: 'The Silence of the Lambs', details: "Jodie Foster stars as Clarice Starling, a top student at the FBI's training academy. Jack Crawford (Scott Glenn) wants Clarice to interview Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.", genre: 'Horror'}, 
        {title: 'Hannibal', details: "Seven years have passed since Dr. Hannibal Lecter (Anthony Hopkins) escaped from custody. The doctor is now at large in Europe. Mason Verger (Gary Oldman) remembers Lecter too, and is obsessed with revenge. Verger was Dr. Lecter's sixth victim, and though horribly disfigured, has survived. Verger realizes that to draw the doctor into the open, he must use someone as bait: Clarice Starling (Julianne Moore).", genre: 'Thriller'}, 
        {title: 'Scream', details: "A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.", genre: 'Horror'}, 
        {title: 'Halloween', details: "On a cold Halloween night in 1963, six year old Michael Myers brutally murdered his 17-year-old sister, Judith. He was sentenced and locked away for 15 years. But on October 30, 1978, while being transferred for a court date, a 21-year-old Michael Myers steals a car and escapes Smith's Grove. He returns to his quiet hometown of Haddonfield, Illinois, where he looks for his next victims.", genre: 'Horror'},
        {title: 'The Lord of the Rings: The Fellowship of the Ring', details: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.", genre: 'Adventure'},
        {title: 'The Hobbit: An Unexpected Journey', details: "Bilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor. The journey takes Bilbo on a path through treacherous lands swarming with orcs, goblins and other dangers, not the least of which is an encounter with Gollum (Andy Serkis) and a simple gold ring that is tied to the fate of Middle Earth in ways Bilbo cannot even fathom.", genre: 'Adventure'},
        {title: 'Titanic', details: "A poor artist and a rich debutante meet and fall in love on the famously ill-fated maiden voyage of the `unsinkable' RMS Titanic in 1912.", genre: 'Romance'},
        {title: 'Romeo + Juliet', details: "Baz Luhrmann helped adapt this classic Shakespearean romantic tragedy for the screen, updating the setting to a post-modern city named Verona Beach. In this version, the Capulets and the Montagues are two rival gangs. Juliet (Claire Danes) is attending a costume ball thrown by her parents. Her father Fulgencio Capulet (Paul Sorvino) has arranged her marriage to the boorish Paris (Paul Rudd) as part of a strategic investment plan. Romeo attends the masked ball and he and Juliet fall in love.", genre: 'Romance'},
        {title: 'The Dark Knight', details: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.", genre: 'Action'},
        {title: 'John Wick', details: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.", genre: 'Action'},
        {title: 'Friday', details: "It's Friday and Craig Jones (Ice Cube) has just gotten fired for stealing cardboard boxes. To make matters worse, rent is due, he hates his overbearing girlfriend, Joi (Paula Jai Parker), and his best friend, Smokey (Chris Tucker), owes the local drug dealer money -- and that's all before lunch. As the hours drag on, Jones and Smokey experience the gamut of urban life, complete with crackheads, shoot-outs and overly sexual pastors, concentrated into one single, unbelievable Friday.", genre: 'Comedy'},
        {title: 'White Chicks', details: "Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland (Shawn Wayans), accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites (Anne Dudek, Rochelle Aytes) to the Hamptons, where they're going to be used as bait for a kidnapper. But when the girls realize the FBI's plan, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from African-American men into a pair of blonde, white women.", genre: 'Comedy'},
        {title: 'The Interview', details: "Dave Skylark (James Franco) and his producer Aaron Rapoport (Seth Rogen) are the team behind the popular tabloid-TV show 'Skylark Tonight'. After learning that North Korea's Kim Jong Un (Randall Park) is a huge fan of the show, they successfully set up an interview with him, hoping to legitimize themselves as actual journalists. However, as Dave and Aaron prepare for their journey to Pyongyang, the CIA steps in, recruits them, and assigns them an incredible mission: Assassinate the dictator.", genre: 'Comdey'}
    ]);

    const [filter, setFilter] = useState('All');

    const filterList = FILTER_NAMES.map((genre) => (
        <FilterButton
         key={genre}
         name={genre}
         isPressed={genre === filter}
         setFilter={setFilter}
        />
    ));

    const [showDetails, setShowDetails] = useState({});


    const toggleDetails = (title) => {
        setShowDetails({
            ...showDetails,
            [title]: !showDetails[title],
        });
    };

    const removeMovie = (movieToRemove) => {
        const updatedList = movies.filter((movie) => movie !== movieToRemove);
        setMovies(updatedList);
        console.log(updatedList);
    };


    return (
        <section>
            <h2>Favorite Movies</h2>
            <div className="filters">
                {filterList}
            </div>
            <ul>
                {movies.filter(FILTER_MAP[filter]).map((movie, index) => (
                    <li key={index}>
                        <button className="remove" type="button" onClick={() => removeMovie(movie)}>
                                Remove{' '}
                        </button>
                        <button className="detailsToggle" onClick={() => {
                            toggleDetails(movie.title);
                        }}
                        >
                            {showDetails[movie.title] ? `${movie.title}` : `${movie.title}` }
                        </button>
                        {showDetails[movie.title] && (
                            <ul>
                                <li className="genre">
                                    {movie.genre}
                                </li>
                                <li className="details">
                                    {movie.details}
                                </li>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}


export default MovieList;