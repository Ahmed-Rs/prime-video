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
import {
  useClearHistory,
  useFilmsHistory,
} from "../context/MoviesHooksContext";

export default function MySpace() {
  const [filterIndex, setFilterIndex] = useState(1);
  const [headingNominate, setHeadingNominate] = useState("favoris");
  // Récupération des ids des favoris depuis Firestore
  const [moviesIdsFavorites, setMoviesIdsFavorites] = useState([]);
  const [seriesIdsFavorites, setSeriesIdsFavorites] = useState([]);
  const data = useGetFavoriteFilmsIds();
  // State pour récupérer le tableau mélangé, utilisation du useEffect pour limiter les appels abusifs à la fonction shuffle
  const [mergedIdsFavorites, setMergedIdsFavorites] = useState([]);
  const [mergedIdsHistory, setMergedIdsHistory] = useState([]);
  // Récupération des films cliqués de l'historique
  const [moviesIdsHistory, setMoviesIdsHistory] = useState([]);
  const [seriesIdsHistory, setSeriesIdsHistory] = useState([]);
  const { movies, series } = useFilmsHistory();
  console.log("data ===> ", data);
  // Stylisation des headers "favoris" et "historique"
  const activeStyle = "text-white border-t-2 border-smoke text-gray-300 ";

  // Récupération des ids favoris depuis firestore
  useEffect(() => {
    if (data) {
      setMoviesIdsFavorites(data.moviesIds);
      setSeriesIdsFavorites(data.seriesIds);
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
  // console.log("moviesIds :::::", moviesIds);
  // console.log("seriesId :::::", seriesIds);
  // console.log("moviesHistoryMySpace     ", moviesIdsHistory);
  // console.log("seriesHistoryMySpace     ", seriesIdsHistory);
  console.log("mergedIdsHistory     ", mergedIdsHistory);

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
    const mergedIdsArrayFavorites = shuffleArray(
      moviesIdsFavorites.concat(seriesIdsFavorites)
    );
    setMergedIdsFavorites(mergedIdsArrayFavorites);
  }, [moviesIdsFavorites, seriesIdsFavorites]);

  useEffect(() => {
    const mergedIdsArrayHistory = shuffleArray(
      moviesIdsHistory.concat(seriesIdsHistory)
    );
    setMergedIdsHistory(mergedIdsArrayHistory);
  }, [moviesIdsHistory, seriesIdsHistory]);

  // Gestion du clique sur les headers
  const handleHeadingClick = (nominate) => {
    setHeadingNominate(nominate);
    setFilterIndex(1);
  };

  // Suppression de l'historique
  const suppressHistory = useClearHistory();
  const handleClearHistory = () => {
    suppressHistory();
  };

  return (
    <>
      <div className="mySpaceWrapper mt-8">
        <section className="mySpaceTitle">
          <div className="inline-flex justify-between">
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
            <div className="w-[2px] ml-12  bg-white"></div>
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
            {headingNominate == "history" ? (
              <>
                <button
                  className="filterCardBtn supHist px-7 py-3 mr-3 text-base bg-[#2f3640] rounded-lg "
                  onClick={() => {
                    handleClearHistory();
                  }}
                >
                  <span>Effacer l&apos;historique</span>
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className="afficheFilms">
          {headingNominate === "favoris" ? (
            <>
              {filterIndex === 1 && (
                <div className="allIds my-8">
                  {mergedIdsFavorites?.map((aId, index) => (
                    <FavoriteCard
                      key={index}
                      type={aId?.media_type}
                      filmId={aId?.id}
                      genreIds={aId?.genre_ids}
                    />
                  ))}
                </div>
              )}
              {filterIndex === 2 && (
                <div className="moviesIds my-8">
                  {moviesIdsFavorites?.map((mId, index) => (
                    <FavoriteCard
                      key={index}
                      type={mId?.media_type}
                      filmId={mId?.id}
                      genreIds={mId?.genre_ids}
                    />
                  ))}
                </div>
              )}
              {filterIndex === 3 && (
                <div className="seriesIds my-8">
                  {seriesIdsFavorites?.map((sId, index) => (
                    <FavoriteCard
                      key={index}
                      type={sId?.media_type}
                      filmId={sId?.id}
                      genreIds={sId?.genre_ids}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {filterIndex === 1 && (
                <div className="allIds my-8">
                  {mergedIdsHistory?.map((aId, index) => (
                    <FavoriteCard
                      key={index}
                      type={aId?.media_type}
                      filmId={aId?.id}
                      genreIds={aId?.genre_ids}
                      addSourceHidder={null}
                    />
                  ))}
                </div>
              )}
              {filterIndex === 2 && (
                <div className="moviesIds my-8">
                  {moviesIdsHistory?.map((mId, index) => (
                    <FavoriteCard
                      key={index}
                      type={mId?.media_type}
                      filmId={mId?.id}
                      genreIds={mId?.genre_ids}
                      addSourceHidder={null}
                    />
                  ))}
                </div>
              )}
              {filterIndex === 3 && (
                <div className="seriesIds my-8">
                  {seriesIdsHistory?.map((sId, index) => (
                    <FavoriteCard
                      key={index}
                      type={sId?.media_type}
                      filmId={sId?.id}
                      genreIds={sId?.genre_ids}
                      addSourceHidder={null}
                    />
                  ))}
                </div>
              )}
            </>
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
const FavoriteCard = ({
  type,
  filmId,
  genreIds,
  addSourceHidder = "hidden",
}) => {
  const film = useSearchById(type, filmId);
  console.log("film ======> ", film);
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
      id: filmId,
      media_type: mediaType,
      genre_ids: genreIds,
    });
  };
  const handleDeleteSource = (filmId, mediaType) => {
    deleteMutation.mutate({
      userID: currentUser?.userID,
      id: filmId,
      media_type: mediaType,
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
          film[0]?.data?.genres.map((genre) => genre.id),
          film[0]?.data?.name ? "tv" : "movie"
        )
      }
      addSource={() =>
        handleAddSource(
          film[0]?.data?.id,
          film[0]?.data?.name ? "tv" : "movie",
          film[0]?.data?.genres.map((genre) => genre.id)
        )
      }
      invisibleAddSource={`${addSourceHidder}`}
      deleteSource={() =>
        handleDeleteSource(
          film[0]?.data?.id,
          film[0]?.data?.name ? "tv" : "movie"
        )
      }
    />
  );
};
