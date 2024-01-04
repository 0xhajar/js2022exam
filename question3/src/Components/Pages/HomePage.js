const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '<h1>Places to visit !</h1>';
  fetch('https://places-exam-api.azurewebsites.net/places')
    .then((response) => response.json())
    .then((result) => {
      result.forEach((e) => {
        main.innerHTML += `<p>${e.name}</p>`;
      });
    });
  fetch('https://places-exam-api.azurewebsites.net/recommended')
    .then((response) => response.json())
    .then((result) => {
      main.innerHTML += `<p>${result.name}</p>`;
    });
};

export default HomePage;
