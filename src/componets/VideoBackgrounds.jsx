import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackgrounds = ({ movieid }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos`,
      API_OPTIONS
    );

    const json = await data.json();

    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0];

    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return <div>VideoBackgrounds</div>;
};

export default VideoBackgrounds;
