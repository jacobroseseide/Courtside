document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Courtside!';
    document.body.appendChild(header);
  
    const message = document.createElement('p');
    message.textContent = 'Live scores and news will appear here.';
    document.body.appendChild(message);
  });