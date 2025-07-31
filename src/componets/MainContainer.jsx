import { useSelector } from "react-redux";
import VideoBackgrounds from "./VideoBackgrounds";
import VideoTitles from "./VideoTitles";
const MainContainer = () => {
  const movies = useSelector((state) => state?.movie?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview ,id} = mainMovie;
  return (
    <div>
      <VideoTitles title={original_title} overview={overview} />
      <VideoBackgrounds movieid={id}  />
    </div>
  );
};

export default MainContainer;
