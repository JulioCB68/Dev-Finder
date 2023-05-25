import Head from "next/head";

import { robotoMono } from "@/config/font";
import { metaData } from "@/config/meta";
import { Login } from "@/pages/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>

      <div className={`${robotoMono.className}`}>
        <Login />
      </div>
    </>
  );
}
