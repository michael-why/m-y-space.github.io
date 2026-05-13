const searchUrls = {
  'the-web': 'https://www.google.com/search?q=',
  'myspace': 'https://spacehey.com/search?q=',
};

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

if (form && searchInput) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (!query) {
      return;
    }

    const selectedType = document.querySelector('input[name="search-type"]:checked')?.value || 'myspace';
    const baseUrl = searchUrls[selectedType] || searchUrls.myspace;

    const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');
    const targetUrl = baseUrl + encodedQuery;
    window.location.href = targetUrl;
  });
}
