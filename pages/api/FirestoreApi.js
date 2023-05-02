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

const userRef = collection(db, "users");

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

// Ajouter des films favoris
const addFavoriteFilms = async (userID, filmId, mediaType) => {
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
    addDoc(favoriteFilmsRef, { filmId: filmId })
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

const getFavoriteFilmsIds = async (userID, setMoviesIds, setSeriesIds) => {
  const specificUserRef = doc(userRef, userID);
  const favoriteMoviesRef = collection(specificUserRef, "favoriteMovies");
  const favoriteSeriesRef = collection(specificUserRef, "favoriteSeries");

  onSnapshot(favoriteMoviesRef, (response) => {
    if (response.size === 0) {
      console.log("Aucun document disponible en Data Base");
    } else {
      setMoviesIds(
        response.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    }
  });
  onSnapshot(favoriteSeriesRef, (response) => {
    if (response.size === 0) {
      console.log("Aucun document disponible en Data Base");
    } else {
      setSeriesIds(
        response.docs.map((doc) => {
          return { ...doc.data() };
        })
      );
    }
  });
};

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

export {
  addFavoriteFilms,
  deleteFavoriteFilms,
  postUserData,
  getCurrentUser,
  getFavoriteFilmsIds,
};
