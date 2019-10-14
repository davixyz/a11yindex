import { CustomHead } from "./../components/Head";

function Home() {
  return (
    <>
      <CustomHead />
      <main className="hero">
        <h1 className="hero__title">
          Coming Soon
          <span className="hero__emoji" role="img" aria-label="strong">
            💪
          </span>
        </h1>
        <style jsx>{`
          .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .hero__emoji {
            margin-left: 1rem;
          }
        `}</style>
        <style global jsx>{`
          body {
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
        `}</style>
      </main>
    </>
  );
}

export default Home;
