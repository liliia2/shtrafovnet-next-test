import Head from 'next/head';

import FineSearcher from './fine-searcher';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>shtrafovnet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <img src="/image/logo.svg"
            alt="Shtrafovnet Logo" className="logo" />
        </header>
        <FineSearcher />
      </main>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          width: auto;
          height: 34px;
          margin: 37px 34px 20px;
        }

        header .logo {
          height: 34px;
          width: 182px;
          pointer-events: none;
        }

        main {
          max-width: 732px;
          width: 100%;
          height: 100%;
          margin: auto;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        #__next {
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        #__next-prerender-indicator {
          display: none;
        }
      `}</style>
    </div>
  )
}
