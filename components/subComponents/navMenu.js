import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const menuParameters = [
  {
    path: "/settings",
    title: "Compte et paramètres",
  },
  {
    path: "/avantages",
    title: "Avantages Prime",
  },
  {
    path: "/compatibility",
    title: "Appareils Compatibles",
  },
  {
    path: "/help",
    title: "Aide",
  },
  {
    path: "/",
    title: "Vous n'êtes pas userName? Déconnexion",
  },
];

const menuProfils = [
  {
    path: "/kids",
    title: "les enfants",
  },
  {
    path: "/newProfil",
    title: "Ajoute un profil",
  },
  {
    path: "/editProfil",
    title: "Modifier les profils",
  },
  {
    path: "knowMore",
    title: "En savoir plus",
  },
];

export const NavMenu = ({}) => {
  return;
};
