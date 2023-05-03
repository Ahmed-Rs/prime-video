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
  const [filterIndex, setFilterIndex] = useState(1);
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

  const buttonClicked = (index) => ({
    outline: filterIndex === index ? "2px solid #e7e7e7" : "",
  });

  return (
    <>
      <div className="mySpaceWrapper mt-8 ">
        <section className="mySpaceTitle">
          <h1 className="text-[30px] pl-12">Liste de favoris</h1>
        </section>
        <section className="filterCard mt-4 pl-12">
          <div>
            <button
              className="filterCardBtn px-6 py-3 mr-3 text-base  bg-[#2f3640] rounded-lg "
              onClick={() => {
                setFilterIndex(1);
              }}
              style={buttonClicked(1)}
            >
              <span>Tout</span>
            </button>

            <button
              className="filterCardBtn px-7 py-3 mr-3 text-base bg-[#2f3640] rounded-lg "
              onClick={() => {
                setFilterIndex(2);
              }}
              style={buttonClicked(2)}
            >
              <span>Films</span>
            </button>

            <button
              className="filterCardBtn px-7 py-3 mr-3 text-base bg-[#2f3640] rounded-lg "
              onClick={() => {
                setFilterIndex(3);
              }}
              style={buttonClicked(3)}
            >
              <span>Séries</span>
            </button>
          </div>
        </section>
        <section className="afficheFilms">
          {(filterIndex === 2 || filterIndex === 1) && (
            <div className="moviesIds my-8">
              {moviesIds.map((mId, index) => (
                <FavoriteCard key={index} filmId={mId?.filmId} type="movie" />
              ))}
            </div>
          )}
          {(filterIndex === 3 || filterIndex === 1) && (
            <div className="seriesIds my-8">
              {seriesIds.map((sId, index) => (
                <FavoriteCard key={index} filmId={sId?.filmId} type="tv" />
              ))}
            </div>
          )}
        </section>
        <section className="randomFilmsSection">
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
