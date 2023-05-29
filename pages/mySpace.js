import { useEffect, useMemo, useRef, useState } from "react";
import {
  addFavoriteFilms,
  deleteFavoriteFilms,
  getCurrentUser,
  getFavoriteFilmsIds,
} from "./api/FirestoreApi";
import CommonRow from "../components/subComponents/Rows/CommonRow";
import {
  useAddFavoriteFilmsMutation,
  useDeleteFavoriteFilmsMutation,
  useGetFavoriteFilmsIds,
  useSearchById,
} from "../utils/hooksApi";
import CommonRowItem from "../components/subComponents/Rows/CommonRowItem";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useFilmsHistory } from "../context/MoviesHooksContext";

export default function MySpace() {
  const [filterIndex, setFilterIndex] = useState(1);
  const [headingNominate, setHeadingNominate] = useState("favoris");
  // Récupération des ids des favoris depuis Firestore
  const [moviesIds, setMoviesIds] = useState([]);
  const [seriesIds, setSeriesIds] = useState([]);
  const data = useGetFavoriteFilmsIds();
  // State pour récupérer le tableau mélangé, utilisation du useEffect pour limiter les appels abusifs à la fonction shuffle
  const [mergedIdsArray, setMergedIdsArray] = useState([]);
  // Récupération des films cliqués de l'historique
  const [moviesIdsHistory, setMoviesIdsHistory] = useState([]);
  const [seriesIdsHistory, setSeriesIdsHistory] = useState([]);
  const { movies, series } = useFilmsHistory();
  // Stylisation des headers "favoris" et "historique"
  const activeStyle = "text-white border-t-2 border-smoke";

  // Récupération des ids favoris depuis firestore
  useEffect(() => {
    if (data) {
      setMoviesIds(data.moviesIds);
      setSeriesIds(data.seriesIds);
    }
  }, [data]);
  // Récupération des ids cliqués de l'historique
  useEffect(() => {
    if (movies || series) {
      setMoviesIdsHistory(movies);
      setSeriesIdsHistory(series);
    }
  }, [movies, series]);

  // console.log("data :::::", data);
  console.log("moviesIds :::::", moviesIds);
  console.log("seriesId :::::", seriesIds);
  console.log("moviesHistoryMySpace     ", moviesIdsHistory);
  console.log("seriesHistoryMySpace     ", seriesIdsHistory);

  // Stylisation des buttons de tri
  const buttonClicked = (index) => ({
    outline: filterIndex === index ? "2px solid #e7e7e7" : "",
  });

  // Mélange des tableaux movies et series
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // Limitation des appels abusifs au shuffleArray()
  useEffect(() => {
    const mergedIdsArrayEffect = shuffleArray(moviesIds.concat(seriesIds));
    setMergedIdsArray(mergedIdsArrayEffect);
  }, [moviesIds, seriesIds]);

  // Gestion du clique sur les headers
  const handleHeadingClick = (nominate) => {
    setHeadingNominate(nominate);
  };

  return (
    <>
      <div className="mySpaceWrapper mt-8">
        <section className="mySpaceTitle">
          <div className="flex">
            <h1
              role="heading"
              className={`${
                headingNominate == "favoris" ? activeStyle : ""
              } text-[30px]  ml-12 cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                handleHeadingClick("favoris");
              }}
            >
              Liste de favoris
            </h1>
            <h1
              role="heading"
              className={`${
                headingNominate == "history" ? activeStyle : ""
              } text-[30px]  ml-12 cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                handleHeadingClick("history");
              }}
            >
              Historique
            </h1>
          </div>
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
          {filterIndex === 1 && (
            <div className="allIds my-8">
              {mergedIdsArray?.map((aId, index) => (
                <FavoriteCard
                  key={index}
                  type={aId.mediaType}
                  filmId={aId?.filmId}
                  genreIds={aId?.genreIds}
                />
              ))}
            </div>
          )}
          {filterIndex === 2 && (
            <div className="moviesIds my-8">
              {moviesIds?.map((mId, index) => (
                <FavoriteCard
                  key={index}
                  type={mId.mediaType}
                  filmId={mId?.filmId}
                  genreIds={mId?.genreIds}
                />
              ))}
            </div>
          )}
          {filterIndex === 3 && (
            <div className="seriesIds my-8">
              {seriesIds?.map((sId, index) => (
                <FavoriteCard
                  key={index}
                  type={sId.mediaType}
                  filmId={sId?.filmId}
                  genreIds={sId?.genreIds}
                />
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
const FavoriteCard = ({ type, filmId, genreIds }) => {
  const film = useSearchById(type, filmId);
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  const handleItemClick = (filmTitle, genreIds, mediaType) => {
    // Redirection vers la page du film
    router.push(
      `/filmPath/${filmTitle}?genreIds=${genreIds}&mediaType=${mediaType}`
    );
  };

  // Gestion de l'id du film pour l'ajout aux favoris de l'utilisateur
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  // MUTATIONS

  const addMutation = useAddFavoriteFilmsMutation();
  const deleteMutation = useDeleteFavoriteFilmsMutation();
  // console.log("addMutation   ", addMutation);

  const handleAddSource = (filmId, mediaType, genreIds) => {
    addMutation.mutate({
      userID: currentUser?.userID,
      filmId: filmId,
      mediaType: mediaType,
      genreIds: genreIds,
    });
  };
  const handleDeleteSource = (filmId, mediaType) => {
    deleteMutation.mutate({
      userID: currentUser?.userID,
      filmId: filmId,
      mediaType: mediaType,
    });
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
          film[0]?.data?.name ? film[0]?.data?.name : film[0]?.data?.title,
          genreIds,
          type
        )
      }
      addSource={() =>
        handleAddSource(
          film[0]?.data?.id,
          film[0]?.data?.name ? "tv" : "movie",
          film?.genre_ids
        )
      }
      invisibleAddSource={`hidden`}
      deleteSource={() => {
        handleDeleteSource(
          film[0]?.data?.id,
          film[0]?.data?.name ? "tv" : "movie"
        );
      }}
    />
  );
};
