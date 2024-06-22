document.addEventListener('DOMContentLoaded', function() {
  fetch('essay.json')
    .then(response => response.json())
    .then(data => {
      const essaysContainer = document.querySelector('.essays');
      data.forEach(essay => {
        const essayElement = document.createElement('div');
        essayElement.innerHTML = `
          <a href="essay.html?slug=${essay.slug}" style="color: black; text-decoration: none;">
            ${essay.title}
          </a>
          <br>
        `;
        essaysContainer.appendChild(essayElement);
      });
    })
    .catch(error => console.error('Error fetching essays:', error));
});