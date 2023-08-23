import { useState } from "react";
import { genreFilter } from "./PrimeSearchMain";

export default function PrimeSearchDetails({ monFilm }) {
  const genreNames = genreFilter(monFilm?.media_type, monFilm?.genre_ids);

  return (
    <>
      <div className="mainDetailsContainer flex flex-col ml-10 ">
        <div className="pt-3 text-2xl text-white ">En savoir plus</div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Genres</h2>
          <ul className="text-gray-500">
            {genreNames.map((genreName, index) => (
              <li key={index}>{genreName}</li>
            ))}
          </ul>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Langue d&apos;origine</h2>
          <p className="text-gray-500">{monFilm?.original_language}</p>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Titre original</h2>
          <p className="text-gray-500">
            {monFilm?.original_title || monFilm?.original_name}
          </p>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Description</h2>
          <p className="text-gray-500">{monFilm?.overview}</p>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Popularité</h2>
          <p className="text-gray-500">{monFilm?.popularity}</p>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Votes</h2>
          <p className="text-gray-500">{monFilm?.vote_average}</p>
        </div>
        <div className="pt-6 ">
          <h2 className="text-2xl text-white ">Date de sortie</h2>
          <p className="text-gray-500">{monFilm?.release_date}</p>
        </div>
      </div>
    </>
  );
}
