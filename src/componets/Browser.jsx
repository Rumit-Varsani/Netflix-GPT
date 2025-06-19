import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browser;
