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
const addFavoriteMovies = (userID, movieId) => {
  const specificUserRef = doc(userRef, userID);
  const favoriteMoviesRef = collection(specificUserRef, "favoriteMovies");
  console.log("favoriteMoviesRef", favoriteMoviesRef);

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

export { addFavoriteMovies, postUserData, getCurrentUser };
