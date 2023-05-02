import { useEffect, useMemo, useState } from "react";
import {
  addFavoriteFilms,
  deleteFavoriteFilms,
  getCurrentUser,
  getFavoriteFilmsIds,
} from "./api/FirestoreApi";
import CommonRow from "../components/subComponents/Rows/CommonRow";
import { useSearchById } from "../utils/hooksApi";
import CommonRowItem from "../components/subComponents/Rows/CommonRowItem";
import { useRouter } from "next/router";

export default function MySpace(params) {
  const [currentUser, setCurrentUser] = useState({});
  // Récupération des ids
  const [moviesIds, setMoviesIds] = useState([]);
  const [seriesIds, setSeriesIds] = useState([]);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  useEffect(() => {
    // Ternaire qui évite d'appeler getFavoriteFilmsIds sans userID
    currentUser?.userID
      ? getFavoriteFilmsIds(currentUser?.userID, setMoviesIds, setSeriesIds)
      : null;
  }, [currentUser, setMoviesIds, setSeriesIds]);

  console.log("moviesIds => => ", moviesIds);
  console.log("seriesIds => => ", seriesIds);

  return (
    <>
      <div className="mySpaceWrapper my-8">
        <span className="mySpaceTitle">
          <h1>Mes favoris</h1>
        </span>
        <section>
          <h2>Mes films</h2>
          <span className="inline-block my-8">
            <div className="mb-4">Mes ids</div>
            <div className="moviesIds my-8">
              <h2>Mes ids de movies</h2>
              {moviesIds.map((mId, index) => (
                <FavoriteCard key={index} filmId={mId?.filmId} type="movie" />
              ))}
            </div>

            <div className="seriesIds my-8">
              <h2>Mes ids de séries</h2>
              {seriesIds.map((sId, index) => (
                <FavoriteCard key={index} filmId={sId?.filmId} type="tv" />
              ))}
            </div>
          </span>
        </section>
        <section className="filmSection">
          <CommonRow searchHookChooser="select" type="all" filter="trending" />
        </section>
      </div>
    </>
  );
}

// On appelle FavoriteCard autant de fois qu'on aura de moviesIds et seriesIds pour afficher la Card de chaque film
const FavoriteCard = ({ type, filmId }) => {
  const film = useSearchById(type, filmId);
  console.log("newMovie ====>", film);
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  const handleItemClick = (filmTitle, genreIds) => {
    // Redirection vers la page du film
    router.push(`/filmPath/${filmTitle}?genreIds=${genreIds}`);
  };

  // Gestion de l'id du film pour l'ajout aux favoris de l'utilisateur
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  const handleAddSource = (filmId, mediaType) => {
    addFavoriteFilms(currentUser?.userID, filmId, mediaType);
  };
  const handleDeleteSource = (filmId, mediaType) => {
    deleteFavoriteFilms(currentUser?.userID, filmId, mediaType);
  };

  return (
    <CommonRowItem
      film={film}
      customImgUrl={film[0]?.data?.backdrop_path}
      filmTitle={
        film[0]?.data?.name ? film[0]?.data?.name : film[0]?.data?.title
      }
      filmDescription={film[0]?.data?.overview}
      filmDuration
      filmNotation={film[0]?.data?.vote_average}
      filmDate={film[0]?.data?.release_date?.substring(0, 4) ?? ""}
      filmAge
      onItemClick={() =>
        handleItemClick(
          film[0]?.data?.name ? film[0]?.data?.name : film[0]?.data?.title
        )
      }
      addSource={() =>
        handleAddSource(film[0]?.data?.id, film[0]?.data?.name ? "tv" : "movie")
      }
      deleteSource={() => {
        handleDeleteSource(
          film[0]?.data?.id,
          film[0]?.data?.name ? "tv" : "movie"
        );
      }}
    />
  );
};
