import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="flex min-h-screen p-24">
        <div className="z-10 w-full flex flex-col items-center justify-between">
          <h1 className="font-primary text-6xl">Gashu-Group</h1>
          <p className="font-primary text-xl">
            We&apos;re no longer open. But thank you for visiting.
          </p>
        </div>
      </main>
    </Fragment>
  );
}
