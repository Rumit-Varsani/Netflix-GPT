import { useSelector } from "react-redux";
import VideoBackgrounds from "./VideoBackgrounds";
import VideoTitles from "./VideoTitles";
const MainContainer = () => {
     const movies = useSelector((state)=>state?.movie?.nowPlayingMovies);
     if(!movies) return null;
     const mainMovie = movies[0];
     console.log(mainMovie);

  return (
    <div>
      <VideoBackgrounds  />
      <VideoTitles/>
    </div>
  );
};

export default MainContainer;
