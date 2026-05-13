const searchUrls = {
  'the-web': 'https://www.google.com/search?q=',
  'linkedin': 'https://www.linkedin.com/in/',
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

        const selectedType = document.querySelector('input[name="search-type"]:checked')?.value || 'linkedin';
    const baseUrl = searchUrls[selectedType] || searchUrls.linkedin;

    const encodedQuery = selectedType === 'linkedin'
      ? query.replace(/\s+/g, '-')
      : encodeURIComponent(query).replace(/%20/g, '+');
    const targetUrl = baseUrl + encodedQuery;
    window.location.href = targetUrl;
  });
}
