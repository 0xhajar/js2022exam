import places from '../../utils/places'
import { clearPage } from '../../utils/render';

const HomePage = () => {
  clearPage();
  const main = document.querySelector('main');
  main.innerHTML = "<h1>Places to visit !</h1>";
  places.forEach(p => {
    main.innerHTML += `<p>${p.name}</p>`;
  });
  
};

export default HomePage;
