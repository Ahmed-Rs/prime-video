import { useEffect, useMemo, useState } from "react";
import { getCurrentUser, getFavoriteMoviesIds } from "./api/FirestoreApi";
import CommonRow from "../components/subComponents/Rows/CommonRow";

export default function MySpace(params) {
  const [currentUser, setCurrentUser] = useState({});
  const [moviesIds, setMoviesIds] = useState([]);
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  useEffect(() => {
    getFavoriteMoviesIds(currentUser?.userID, setMoviesIds);
  }, [currentUser, setMoviesIds]);

  console.log("moviesIds => => ", moviesIds);

  return (
    <>
      <div className="mySpaceWrapper my-8">
        <span className="mySpaceTitle">
          <h1>Mes favoris</h1>
        </span>
        <section className="">
          <h2>Mes films</h2>
          <span>
            <div>Mes ids</div>
            {moviesIds.map((mId, index) => (
              <p key={index}>{mId.movieId}</p>
            ))}
          </span>
        </section>
        <section className="filmSection">
          <CommonRow />
        </section>
      </div>
    </>
  );
}
