document.addEventListener('DOMContentLoaded', function() {
  fetch('essay.json')
    .then(response => response.json())
    .then(data => {
      const essaysContainer = document.querySelector('.essays');
      data.forEach(essay => {
        const essayElement = document.createElement('div');
        essayElement.classList.add('essay');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = essay.title;
        essayElement.appendChild(titleElement);
        
        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        dateElement.textContent = essay.date;
        essayElement.appendChild(dateElement);
        
        const bodyElement = document.createElement('p');
        bodyElement.classList.add('body');
        bodyElement.innerHTML = essay.body;
        essayElement.appendChild(bodyElement);
        
        essaysContainer.appendChild(essayElement);
      });
    })
    .catch(error => console.error('Error fetching essays:', error));
});