/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import GlobalDisplayer from "../components/GlobalDisplayer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Halo !
      <div className="wrapper">
        <div className="wrapper_2">
          <GlobalDisplayer />
        </div>
      </div>
    </div>
  );
}
