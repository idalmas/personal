document.addEventListener('DOMContentLoaded', function() {
  fetch('essay.json')
    .then(response => response.json())
    .then(data => {
      const essaysContainer = document.querySelector('.essays');
      data.forEach(essay => {
        const essayElement = document.createElement('div');
        essayElement.innerHTML = `
          <a href="${essay.url}" style="color: black; text-decoration: none;">
            ${essay.title}
          </a>
          <div>${essay.body}</div>
          <br>
        `;
        essaysContainer.appendChild(essayElement);
      });
    });
});