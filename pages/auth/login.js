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
      <header className="w-full bg-amber-100 border-b-[1px]">
        <nav className="w-36 mx-auto">
          <img src="../welcome/login-logo.png" alt="login-logo" />
        </nav>
      </header>
      <main className=" max-w-[400px] mx-auto mt-4">
        <form action="" method="post">
          <h1 className=" text-2xl font-bold">S'identifier</h1>

          <div className="text-right mb-4 ">
            <a href="">Mot de passe oublié ?</a>
          </div>
          <div className="relative border-[2px] border-gray-300">
            <label
              htmlFor="auth_email"
              className="absolute w-0 h-0 overflow-hidden"
            >
              Email ou numéro de téléphone
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
                 pl-3 pr-7 mt-0 bg-slate-200 text-[100%]"
              />
              <div
                className="float-right absolute right-2 top-4 cursor-pointer"
                onClick={() => setEmail("")}
              >
                <img src="../welcome/cancel-16.png" alt="email-eraser" />
              </div>
            </div>
            <label
              htmlFor="auth_pwd"
              className="absolute w-0 h-0 overflow-hidden "
            >
              Mot de passe Amazon
            </label>
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
        </form>
      </main>
    </div>
  );
}
