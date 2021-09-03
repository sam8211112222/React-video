import axios from "axios";
const KEY = "AIzaSyAswytlwoWVGauhRssOiFg-tvV-CeR12GA";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxresult: 5,
    key: KEY,
  },
});
