/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="inline-block max-w-navMW overflow-visible relative pr-4 cursor-pointer">
      <input type="checkbox" id="nav_profiles_dropdown" />
      <label
        htmlFor="nav_profiles_dropdown"
        className="nav_profiles_dropdown flex items-center relative pb-0 pl-0 font-normal m-0 border-none cursor-pointer"
      >
        <div className="flex items-center shrink-0 cursor-pointer">
          <img src="./welcome/user-24.png" alt="user-icon" />
        </div>
        <div className="mx-2 overflow-hidden text-left text-ellipsis font-normal cursor-pointer">
          userName
        </div>
      </label>
      <ul></ul>
    </div>
  );
};
