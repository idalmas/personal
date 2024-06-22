document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const essaySlug = urlParams.get('slug');
  
    fetch('essay.json')
      .then(response => response.json())
      .then(data => {
        const essay = data.find(e => e.slug === essaySlug);
        if (essay) {
          document.getElementById('essay-title').textContent = essay.title;
          document.getElementById('essay-date').textContent = essay.date;
          document.getElementById('essay-body').innerHTML = essay.body;
        } else {
          console.error('Essay not found');
        }
      })
      .catch(error => console.error('Error fetching essay:', error));
  });