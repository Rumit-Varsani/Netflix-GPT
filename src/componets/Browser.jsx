import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browser;
