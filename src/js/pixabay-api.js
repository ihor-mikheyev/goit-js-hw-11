function getUrl(str) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '44649550-1f14fff39212e3f1a5e911ecf';
  const imgType = 'photo';
  const orient = 'horizontal';
  const safesearch = 'true';
  const urlRequest = `${BASE_URL}?key=${KEY}&q=${str}&image_type=${imgType}&orientation=${orient}&safesearch=${safesearch}`;

  return fetch(urlRequest).then(resp => {
    if (!resp.ok) {
      throw new Error('No match item');
    }

    return resp.json();
  });
}

export { getUrl };
