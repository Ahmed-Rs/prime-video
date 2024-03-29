/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const myFormRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Important, sinon redirection auto vers la page d'accueil
    query !== ""
      ? router.push(`/primeSearch/${query}`)
      : window.alert("Veuillez renseigner ce champs");
  };

  return (
    <>
      <input type="checkbox" id="nav_search" /> {/* role="button" */}
      <label htmlFor="nav_search" className="nav_search_label">
        <img
          src="./welcome/search-icon.png"
          className="nav_search_icon_label cursor-pointer"
          alt="search-icon"
        />
      </label>
      <form
        action=""
        className="nav_search_form"
        ref={myFormRef}
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher"
          className="inline-block focus:outline-none focus:bg-slate-100 bg-slate-300 p-1"
        />
      </form>
    </>
  );
}
