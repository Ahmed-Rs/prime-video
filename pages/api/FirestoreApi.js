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
const addFavoriteMovies = async (userID, movieId) => {
  const specificUserRef = doc(userRef, userID);
  const favoriteMoviesRef = collection(specificUserRef, "favoriteMovies");
  // Requête pour repérer dans la sous-collection favoriteMovies les documents dont le movieId  correspond à celui sur lequel on vient de cliquer dans notre app pour l'ajouter aux favoris
  const q = query(favoriteMoviesRef, where("movieId", "==", movieId));
  // On récupère le fruit de cette requête stockant ces documents dans une variable
  const querySnapshot = await getDocs(q);
  // On vérifie si cette var == 0 (film non présent dans la db), sinon film déjà présent et on ne le rajoute donc pas
  if (querySnapshot.size > 0) {
    toast.error("Le film est déjà dans votre liste de favoris");
  } else {
    addDoc(favoriteMoviesRef, { movieId: movieId })
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

const getFavoriteMoviesIds = async (userID, setMoviesIds) => {
  if (!userID) {
    return;
  }

  const specificUserRef = doc(userRef, userID);
  const favoriteMoviesRef = collection(specificUserRef, "favoriteMovies");

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
  addFavoriteMovies,
  postUserData,
  getCurrentUser,
  getFavoriteMoviesIds,
};
