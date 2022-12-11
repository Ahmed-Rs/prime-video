/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  return (
    <div className="w-full min-h-screen text-black">
      <header className="w-full mb-12">
        <nav className="w-36 mx-auto">
          <img src="../welcome/login-logo.png" alt="login-logo" />
        </nav>
      </header>
      <main className=" w-[350px] mx-auto mt-4 p-5 border">
        <form action="" name="signIn" method="post">
          <h1 className=" text-3xl font-medium mb-6">S'identifier</h1>

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
                  className="table-cell w-full h-12 my-[2px]
                 pl-3 pr-7 mb-4 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-4 cursor-pointer"
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
                  <a href="">Mot de passe oublié</a>
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
                  className="table-cell w-full h-12 my-[2px]
                 pl-3 pr-7 mb-0 bg-slate-200 text-[100%]"
                />
                <div
                  className="float-right absolute right-2 top-4 cursor-pointer"
                  onClick={() => setPassword("")}
                >
                  <img src="../welcome/cancel-16.png" alt="pwd-eraser" />
                </div>
              </div>
            </div>
          </div>
          <div className="signin mb-8">
            <span className="block w-full my-3 py-2 bg-[#ebd57f] text-center border border-orange-300 rounded cursor-pointer">
              <input
                type="submit"
                id="signInSubmit"
                value="S'identifier"
                className="cursor-pointer"
              />
            </span>
          </div>
        </form>
      </main>
    </div>
  );
}
