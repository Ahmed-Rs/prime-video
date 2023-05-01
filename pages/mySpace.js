import { useEffect, useMemo, useState } from "react";
import { getCurrentUser, getFavoriteFilmsIds } from "./api/FirestoreApi";
import CommonRow from "../components/subComponents/Rows/CommonRow";
import { useSearchById } from "../utils/hooksApi";
import CommonRowItem from "../components/subComponents/Rows/CommonRowItem";

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
          <CommonRow />
        </section>
      </div>
    </>
  );
}

const FavoriteCard = ({ filmId, type }) => {
  const movie = useSearchById(type, filmId);
  console.log("newmovie ====>", movie);
  return (
    <CommonRowItem
      movie={movie}
      customImgUrl={movie[0]?.data?.backdrop_path}
      filmTitle={movie[0]?.data?.title}
      filmDescription={movie[0]?.data?.overview}
      filmDuration
      filmNotation={movie[0]?.data?.vote_average}
      filmDate={movie[0]?.data?.release_date?.substring(0, 4) ?? ""}
      filmAge
      onItemClick={() =>
        handleItemClick(movie[0]?.data?.title, movie[0]?.data?.genre_ids)
      }
      idGenerate={() =>
        handleGenerateId(movie[0]?.data?.id, movie[0]?.data.media_type)
      }
    />
  );
};
