/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
// import { userContext } from "../../context/userContext";
import { auth } from "../../../utils/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const menuLogin = [
  {
    path: "/auth/signIn",
    title: "Identifiez-vous",
  },
  {
    path: "/compatibility",
    title: "Appareils Compatibles",
  },
  {
    path: "/help",
    title: "Aide",
  },
];

const menuLanguages = [
  {
    path: "/french",
    title: "Français",
  },
  {
    path: "/english",
    title: "English",
  },
  {
    path: "/deutch",
    title: "Deutsch",
  },
  {
    path: "/norge",
    title: "Norge",
  },
  {
    path: "/suomi",
    title: "Suomi",
  },
  {
    path: "/portugues",
    title: "Portugues (Brasil)",
  },
  {
    path: "/portugues",
    title: "Portugues (Portugal)",
  },
  {
    path: "/espanol",
    title: "Espagnol",
  },
  {
    path: "/arabic",
    title: "Arabic",
  },
  {
    path: "/dansk",
    title: "Dansk",
  },
  {
    path: "/dansk",
    title: "Dansk",
  },
  {
    path: "/bahasa",
    title: "Bahasa Melayu",
  },
];
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
  // const { currentUser } = useContext(userContext);
  const [connected, setConnected] = useState(false);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [loading, user]);

  return connected ? (
    <div className="inline-block max-w-navMW overflow-visible relative pr-4 cursor-pointer">
      <input type="checkbox" id="nav_profiles_dropdown" />
      <label
        htmlFor="nav_profiles_dropdown"
        className="nav_profiles_dropdown flex items-center relative pb-0 pl-0 font-normal m-0 border-none cursor-pointer"
      >
        <div className="flex items-center shrink-0 cursor-pointer opacity-70">
          <img src="./welcome/user-24.png" alt="user-icon" />
        </div>
        <div className="mx-2 overflow-hidden text-left text-ellipsis font-normal cursor-pointer">
          <span className="profiles_dropdown_name block text-15 opacity-70 max-w-nameW overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
            {user?.displayName}
          </span>
        </div>
      </label>
      <ul role="menu" className="nav_bar_ul">
        <div className="nav_dropl_col_left">
          {menuParameters.map((link, index) => {
            return (
              <li
                key={index}
                className="block relative whitespace-nowrap cursor-default leading-5 text-clairs-navLinks hover:text-white"
              >
                <Link
                  href={link.path}
                  className="border-none p-3 break-words whitespace-normal block text-14 "
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
          <li className="block relative whitespace-nowrap cursor-default leading-5 text-clairs-navLinks hover:text-white">
            <Link
              href="/"
              className="border-none p-3 break-words whitespace-normal block text-14 "
              onClick={() => {
                try {
                  auth.signOut();
                  localStorage.clear();
                  console.log("clearedStorage => ", localStorage);
                } catch {
                  alert("Error in disconnecting, please check your connection");
                }
              }}
            >
              Vous n'êtes pas {user?.displayName} ? Déconnexion
            </Link>
          </li>
        </div>
        <div className="nav_dropl_col_right">
          {menuProfils.map((link, index) => {
            return (
              <li
                key={index}
                className="block relative whitespace-nowrap cursor-default leading-5 text-clairs-navLinks hover:text-white"
              >
                <Link
                  href={link.path}
                  className="border-none p-3 break-words whitespace-normal block text-14 "
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  ) : (
    <div className="flex">
      <div className="inline-block max-w-navMW overflow-visible relative pr-6 cursor-pointer">
        <input type="checkbox" id="nav_profiles_dropdown_lang" />
        <label
          htmlFor="nav_profiles_dropdown_lang"
          className="nav_profiles_dropdown_lang flex items-center relative pb-0 pl-0 font-normal m-0 border-none cursor-pointer"
        >
          <div className="flex items-center shrink-0 cursor-pointer opacity-70">
            <img src="./welcome/globe-2-24.png" alt="user-icon" />
          </div>
          <div className="mx-2 overflow-hidden text-left text-ellipsis font-normal cursor-pointer">
            <span className="profiles_dropdown_lang block text-15 opacity-70 max-w-nameW overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
              FR
            </span>
          </div>
        </label>

        <ul
          role="menu"
          className="nav_bar_ul w-auto columns-3 overflow-x-hidden overflow-y-auto"
        >
          {menuLanguages.map((link, index) => {
            return (
              <li
                key={index}
                className="block relative whitespace-nowrap cursor-default leading-5 text-clairs-navLinks hover:text-white"
              >
                <Link
                  href={link.path}
                  className="border-none p-3 break-words whitespace-nowrap block text-14 "
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="inline-block overflow-visible relative pr-4 cursor-pointer">
        <input type="checkbox" id="nav_profiles_dropdown_logger" />
        <label
          htmlFor="nav_profiles_dropdown_logger"
          className="nav_profiles_dropdown_logger flex items-center relative pb-0 pl-0 font-normal m-0 border-none cursor-pointer"
        >
          <div className="flex items-center shrink-0 cursor-pointer opacity-70">
            <img src="./welcome/user-24.png" alt="user-icon" />
          </div>
          <div className="mx-2 overflow-hidden text-left text-ellipsis font-normal cursor-pointer">
            <span className="profiles_dropdown_menu block text-15 opacity-70 max-w-nameW overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
              Menu
            </span>
          </div>
        </label>

        <ul role="menu" className="nav_bar_ul nav_bar_ul_menu w-auto">
          {menuLogin.map((link, index) => {
            return (
              <li
                key={index}
                className="block whitespace-nowrap cursor-default leading-5 text-clairs-navLinks hover:text-white"
              >
                <Link
                  href={link.path}
                  className="p-3 break-words whitespace-nowrap block text-14 border-b-[1px] border-b-navLi"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
