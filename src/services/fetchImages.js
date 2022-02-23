import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "24736061-8a2fbbfe59264ca423155d5fe";

async function fetchImages(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}

export default fetchImages;
