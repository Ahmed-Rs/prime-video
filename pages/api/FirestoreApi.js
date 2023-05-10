/* eslint-disable react-hooks/exhaustive-deps */
import { firestore, storage, db } from "../../utils/firebase";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";

const userRef = collection(db, "users");

const postUserData = (object) => {
  const specificUserRef = doc(userRef, object?.userID);
  setDoc(specificUserRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(
        "Erreur lors de l'ajout des données du nouvel inscrit => ",
        err
      );
    });
};

// Getting current user
const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data() };
        })
        .filter((item) => item?.userID === localStorage?.getItem("userID"))[0]
    );
  });
};

// On construit la fonction de sorte à intégrer les setters, utiliser les promesses et les onSnapshot pour les changements de db en temps réel.
// useQuery a besoin de travailler sur le résultat d'une promesse d'où l'utilisation de new Promise ci-dessous, ou .then() ou async/await.
const getFavoriteFilmsIds = async (userID, setSeriesIds, setMoviesIds) => {
  const specificUserRef = doc(userRef, userID);
  const favoriteMoviesRef = collection(specificUserRef, "favoriteMovies");
  const favoriteSeriesRef = collection(specificUserRef, "favoriteSeries");

  // On met le snapshot dans la Promise, elle retourne ce qui se trouve dans resolve()
  const seriesPromise = new Promise((resolve, reject) => {
    onSnapshot(
      favoriteSeriesRef,
      (response) => {
        if (response.size === 0) {
          console.log("Aucun document disponible en Data Base");
          resolve([]);
        } else {
          const seriesIds = response.docs.map((doc) => {
            const answer = { ...doc.data() };
            return answer;
          });
          // Setter dans le onSnapshot pour mise à jour en temps réel de seriesIDs et affichage en temps réel côté interface utilisateur
          setSeriesIds(seriesIds);
          resolve(seriesIds);
        }
      },
      (error) => {
        console.error("Series onSnapshot error:", error);
        reject(error);
      }
    );
  });

  const moviesPromise = new Promise((resolve, reject) => {
    onSnapshot(
      favoriteMoviesRef,
      (response) => {
        if (response.size === 0) {
          console.log("Aucun document disponible en Data Base");
          resolve([]);
        } else {
          const moviesIds = response.docs.map((doc) => {
            const answer = { ...doc.data() };
            return answer;
          });
          // Setter dans le onSnapshot pour mise à jour en temps réel de moviesIDs et affichage en temps réel côté interface utilisateur
          setMoviesIds(moviesIds);
          resolve(moviesIds);
        }
      },
      (error) => {
        console.error("Movies onSnapshot error:", error);
        reject(error);
      }
    );
  });

  // On retourne les résultats des 2 Promise avec la syntaxe adéquate.
  return Promise.all([seriesPromise, moviesPromise]).then(
    ([seriesIds, moviesIds]) => {
      return { seriesIds, moviesIds };
    }
  );
};

// Ajouter des films favoris
const addFavoriteFilms = async (userID, filmId, mediaType) => {
  console.log("filmId BIS ", filmId);
  console.log("mediaType BIS ", mediaType);
  console.log("userID BIS ", userID);
  const specificUserRef = doc(userRef, userID);
  const favoriteFilmsRef =
    mediaType == "movie"
      ? collection(specificUserRef, "favoriteMovies")
      : collection(specificUserRef, "favoriteSeries");
  // Requête pour repérer dans la sous-collection favoriteMovies/favoriteSeries les documents dont le filmId correspond à celui sur lequel on vient de cliquer dans notre app pour l'ajouter aux favoris
  const q = query(favoriteFilmsRef, where("filmId", "==", filmId));
  // On récupère le fruit de cette requête stockant ces documents dans une variable
  const querySnapshot = await getDocs(q);
  // On vérifie si cette var == 0 (film non présent dans la db), sinon film déjà présent et on ne le rajoute donc pas
  if (querySnapshot.size > 0) {
    toast.error("Le film est déjà dans votre liste de favoris");
  } else {
    addDoc(favoriteFilmsRef, { filmId: filmId, mediaType: mediaType })
      .then(() => {
        toast.success("Film ajouté à votre liste");
      })
      .catch((error) => {
        toast.error(
          "Problème lors de l'ajout du film à vos favoris",
          error.message
        );
      });
  }
};

// Supprimer des films des favoris
const deleteFavoriteFilms = async (userID, filmId, mediaType) => {
  console.log("filmId BIS ", filmId);
  console.log("mediaType BIS ", mediaType);
  console.log("userID BIS ", userID);
  const specificUserRef = doc(userRef, userID);
  const favoriteFilmsRef =
    mediaType == "movie"
      ? collection(specificUserRef, "favoriteMovies")
      : collection(specificUserRef, "favoriteSeries");
  const q = query(favoriteFilmsRef, where("filmId", "==", filmId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    toast.error("Ce film n'est pas dans vos favoris");
  } else {
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref)
        .then(() => {
          toast.success("Le film supprimé de vos favoris");
        })
        .catch((error) => {
          toast.error(
            "Problème lors de la suppression du film de vos favoris",
            error.message
          );
        });
    });
  }
};

export {
  addFavoriteFilms,
  deleteFavoriteFilms,
  postUserData,
  getCurrentUser,
  getFavoriteFilmsIds,
};
