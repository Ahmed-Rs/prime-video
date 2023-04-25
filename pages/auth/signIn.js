/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/userContext";

import Link from "next/link";
// import { userContext } from "../../context/userContext";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login, currentUser } = useContext(userContext);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    try {
      route.push("/");
      login(email, password)?.then((result) =>
        console.log("userInfos => ", result?.user?.email)
      ),
        console.log("localStorage => ", localStorage);
    } catch (error) {
      console.log(error);
    }
  };

  // Sign in with Google
  const googleLogin = () => {
    try {
      route.push("/"),
        signInWithPopup(auth, googleProvider)?.then((result) =>
          // console.log("userInfos => ", result?.user?.email),
          localStorage.setItem("userEmail", result?.user?.email)
        );
      // console.log("localStorage => ", localStorage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      route.push("/");
    } else {
      console.log("login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="w-full min-h-screen text-black font-poppins pb-4 mb-4 text-[13px]">
      <header className="w-full mb-12">
        <nav className="w-36 mx-auto">
          <img src="../welcome/login-logo.png" alt="login-logo" />
        </nav>
      </header>
      <main className="w-[350px] mx-auto mt-4 p-5 border">
        <form action="" id="login_form" name="signIn" method="post">
          <section className="flex justify-between ">
            <h1 className="block text-3xl font-medium mb-6">S'identifier</h1>
            <span className="block cursor-pointer">
              <button
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  googleLogin();
                }}
              >
                <FcGoogle className="text-4xl" />
              </button>
            </span>
          </section>

          <div className="identifiers mb-8">
            <div>
              <label
                htmlFor="auth_email"
                className="block text-sm font-bold mb-1"
              >
                Adresse e-mail ou numéro de téléphone portable
              </label>
              <div className="table table-fixed w-full relative">
                <input
                  type="email"
                  id="auth_email"
                  name="email"
                  placeholder="Email ou numéro de téléphone"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="table-cell w-full h-9 my-[2px]
                 pl-3 pr-7 mb-4 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-3 cursor-pointer"
                  onClick={() => setEmail("")}
                >
                  <img src="../welcome/cancel-16.png" alt="email-eraser" />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between mb-1">
                <label
                  htmlFor="auth_pwd"
                  className="inline-block text-sm font-bold"
                >
                  Mot de passe
                </label>

                <div className="inline-block text-right text-sm ">
                  <Link href="/helpPwd" className="text-[#0066c0]">
                    Mot de passe oublié
                  </Link>
                </div>
              </div>
              <div className="table table-fixed w-full relative">
                <input
                  type="password"
                  name="password"
                  id="auth_pwd"
                  placeholder="Mot de passe Amazon"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="table-cell w-full h-9 my-[2px]
                 pl-3 pr-7 mb-0 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-3 cursor-pointer"
                  onClick={() => setPassword("")}
                >
                  <img src="../welcome/cancel-16.png" alt="pwd-eraser" />
                </div>
              </div>
            </div>
          </div>
          <div className="signin mb-8">
            <span className="a_button inline-block w-full bg-[#f0c14b] rounded-[3px] border-solid border-[1px] border-loginBtn cursor-pointer p-0 text-center align-middle">
              <span className="a_button_inner block relative overflow-hidden h-7 bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] rounded-sm shadow-newAcc">
                <input
                  type="submit"
                  id="signInSubmit"
                  value="S'identifier"
                  className="absolute inline-block top-0 left-0 w-full h-full cursor-pointer my-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                />
              </span>
            </span>
            <div
              id="legal_text_row"
              className="w-full mt-5 text-sm leading-normal"
            >
              En continuant, vous acceptez les{" "}
              {
                <Link href="/legal/terms" className="text-[#0066c0]">
                  Conditions d'utilisation
                </Link>
              }
              d'Amazon. Veuillez consulter notre{" "}
              {
                <Link href="/legal/privacy" className="text-[#0066c0]">
                  Politique de confidentialité, notre Avertissement relatif aux
                  cookies et notre Avis sur les publicités basées sur les
                  centres d'intérêt
                </Link>
              }
              .
            </div>
            <div className="mt-4 ml-2">
              <label htmlFor="auth_remember_me">
                <input
                  type="checkbox"
                  className="w-[13px] h-[13px] relative "
                />
                <span className="ml-2">
                  Rester connecté
                  <Link href="" className="ml-2 text-[#0066c0]">
                    Détails
                  </Link>
                </span>
              </label>
            </div>
          </div>
          <div className="sign_up_asker relative text-center top-[2px] pt-1 mb-4">
            <h5 className="inline-block relative bg-[#fff] px-2 z-[2]">
              Nouveau chez Amazon ?
            </h5>
          </div>
          <span className="a_button inline-block w-full bg-[#e7e9ec] rounded-[3px] border-solid border-[1px] border-newAccBorder cursor-pointer p-0 text-center align-middle">
            <span className="a_button_inner flex justify-center items-center relative overflow-hidden h-7  bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] rounded-sm shadow-newAcc ">
              <Link href="/auth/signUp">Créer votre compte Amazon</Link>
            </span>
          </span>
        </form>
      </main>
      <footer>
        <div className="mt-7">
          <div className="">
            <div className="sign-in-divider-inner h-11 mb-[-18px] "></div>
          </div>
        </div>
        <div className="mb-4 flex justify-center space-x-14 ">
          <Link href="/conditions" className="text-[#0066c0]">
            Conditions d'utilisation et Politique de confidentialité
          </Link>
          <Link href="/avis" className="text-[#0066c0]">
            Donnez-nous votre avis
          </Link>
          <Link href="/help" className="text-[#0066c0]">
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
