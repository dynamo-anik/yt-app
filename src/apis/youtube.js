import axios from "axios";

const KEY = "AIzaSyAoVoaagV1L6E5pMXoX-BtoNt6mYUQyitY";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
