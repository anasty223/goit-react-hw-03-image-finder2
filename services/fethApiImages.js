function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}}&page=${page}&key=24736061-8a2fbbfe59264ca423155d5fe&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинки с таким запросм ${query}`));
  });
}

const api = {
  fetchImages,
};

export default api;
