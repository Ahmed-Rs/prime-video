/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import Router, { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { userContext } from "../../context/userContext";

export default function SignUp() {
  const route = useRouter();
  const displayNameRef = useRef([]);
  const [displayNameValue, setDisplayNameValue] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const { register, login, currentUser } = useContext(userContext);
  const [useer, loading] = useAuthState(auth);

  const handleRegister = async (e) => {
    try {
      if (checkPassword === password) {
        route.push("/"), await register(email, password, displayNameValue);
        //   await updateProfile(useer, {
        //     displayName: "monNomBis",
        //   }).catch((err) => console.log(err));
        // // localStorage.setItem("userEmail", user?.email),
        console.log("login successfull");
      } else {
        console.log("login failed: passwords doesn't match");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const displayNameV = displayNameRef?.current;
  //   const values = displayNameV.map((input) => input?.value);
  //   setDisplayNameValue(values);
  //   console.log("values => ", values);
  // }, []);
  // console.log("displayNameValue => ", displayNameValue);

  if (useer) {
    route.push("/");
  } else {
    console.log("No user connected");
  }

  return (
    <div className="w-full min-h-screen text-black font-poppins pb-4 mb-4 text-[13px]">
      <header className="w-full mb-12 bg-slate-100 border-b-2">
        <nav className="w-36 mx-auto">
          <img src="../welcome/login-logo.png" alt="login-logo" />
        </nav>
      </header>
      <main className="w-[350px] mx-auto mt-4 p-5 border">
        <form action="" id="register_form" name="signUp" method="post">
          <h1 className=" text-3xl font-medium mb-6">Créer un compte</h1>
          <div className="w-full mb-[14px] leading-5 ">
            <label
              htmlFor="register_name"
              className="block pl-[2px] pb-[2px] font-semibold"
            >
              Votre nom
            </label>
            <input
              type="text"
              id="register_name"
              className="inline-block w-full h-9 py-[3px] px-[7px] leading-normal m-0 align-middle text-[100%]  rounded-[3px] border-[1px] border-t-[#949494] shadow-regInp"
              placeholder="Prénom et Nom"
              onChange={(e) => setDisplayNameValue(e.target.value)}
            />
          </div>
          <div className="w-full mb-[14px] leading-5 ">
            <label
              htmlFor="register_email"
              className="block pl-[2px] pb-[2px] font-semibold"
            >
              E-mail
            </label>
            <input
              type="email"
              id="register_email"
              className="inline-block w-full h-9 py-[3px] px-[7px] leading-normal m-0 align-middle text-[100%]  rounded-[3px] border-[1px] border-t-[#949494] shadow-regInp"
              placeholder="Votre email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="w-full leading-5 ">
            <div className="w-full mb-[14px] leading-5 ">
              <label
                htmlFor="register_passeword"
                className="block pl-[2px] pb-[2px] font-semibold"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="register_passeword"
                className="inline-block w-full h-9 py-[3px] px-[7px] leading-normal m-0 align-middle text-[100%]  rounded-[3px] border-[1px] border-t-[#949494] shadow-regInp"
                placeholder="Mot de passe"
                // value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="mt-3">
                <div className="flex justify-center items-center space-x-1">
                  <img
                    src="/welcome/info-alert.png"
                    className="self-baseline"
                    alt="info-alert"
                  />
                  <div className="text-xs">
                    Les mots de passe doivent au moins avoir 6 caractères.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-[14px] leading-5 ">
              <label
                htmlFor="register_passeword_check"
                className="block pl-[2px] pb-[2px] font-semibold"
              >
                Entrez le mot de passe à nouveau
              </label>
              <input
                type="password"
                id="register_passeword_check"
                className="inline-block w-full h-9 py-[3px] px-[7px] leading-normal m-0 align-middle text-[100%]  rounded-[3px] border-[1px] border-t-[#949494] shadow-regInp"
                placeholder="Mot de passe"
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-7">
            <span className="a_button inline-block w-full relative bg-[#f0c14b] rounded-[3px] border-solid border-[1px] border-loginBtn cursor-pointer p-0 text-center align-middle">
              <input
                type="submit"
                className="absolute bg-transparent text-transparent border-0 h-full w-full left-0 top-0 z-10 overflow-visible opacity-5 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleRegister();
                }}
              />
              <span className="a_button_inner flex justify-center items-center relative overflow-hidden h-7 bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-sm shadow-newAcc text-sm">
                Créer votre compte Amazon
              </span>
            </span>
            <div className="mt-5 text-xs">
              En créant un compte, vous acceptez les{" "}
              <Link href="/conditions" className="text-[#0066c0]">
                Conditions d'utilisation
              </Link>
              d'Amazon. Veuillez consulter notre{" "}
              <Link href={"/avis"} className="text-[#0066c0]">
                Politique de confidentialité, notre Avertissement relatif aux
                cookies et notre Avis sur les publicités basées sur les centres
                d'intérêt
              </Link>{" "}
              .
            </div>
          </div>
          <div className="register_divider"></div>
          <div className="w-full text-xs">
            Vous possédez déjà un compte ?{" "}
            <Link href="/auth/signIn" className="text-[#0066c0]">
              Identifiez-vous
            </Link>
          </div>
        </form>
      </main>
      <footer>
        <div className="mt-7">
          <div className="">
            <div className="sign-in-divider-inner h-11 mb-[-18px] "></div>
          </div>
        </div>
        <div className="mb-4 flex justify-center space-x-14 ">
          <Link href="/conditions" className="text-[#0066c0] text-[12px] ">
            Conditions d'utilisation et Politique de confidentialité
          </Link>
          <Link href="/avis" className="text-[#0066c0] text-[12px] ">
            Donnez-nous votre avis
          </Link>
          <Link href="/help" className="text-[#0066c0] text-[12px] ">
            Aide
          </Link>
        </div>
        <div className="text-center">
          <span className="text-sombres-grayText">
            © 1996-2022, Amazon.com, Inc. ou ses filiales
          </span>
        </div>
      </footer>
    </div>
  );
}
