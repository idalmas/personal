document.addEventListener('DOMContentLoaded', function() {
  fetch('essay.json')
    .then(response => response.json())
    .then(data => {
      const essaysContainer = document.querySelector('.essays');
      data.forEach(essay => {
        const essayElement = document.createElement('div');
        essayElement.classList.add('essay');
        
        const titleElement = document.createElement('h2');
        const titleLink = document.createElement('a');
        titleLink.href = `essay.html?slug=${essay.slug}`; // Link to essay.html with slug as query parameter
        titleLink.textContent = essay.title;
        titleElement.appendChild(titleLink);
        essayElement.appendChild(titleElement);
        
        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        dateElement.textContent = essay.date;
        essayElement.appendChild(dateElement);
        
        essaysContainer.appendChild(essayElement);
      });
    })
    .catch(error => console.error('Error fetching essays:', error));
});