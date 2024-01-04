
import places from '../../utils/places';

const Photos = () => {
  const main = document.querySelector('main');
  let pl = 2;
  main.innerHTML = 
  `<div id="diiv"> <img src =${places[pl].image}>
  <h1>${places[pl].name}</h1> </div>`;
  const previous = document.createElement('button');
  const next = document.createElement('button');
  previous.textContent = "Previous";
  next.textContent = "Next";
  main.appendChild(previous);
  main.appendChild(next);

  previous.addEventListener(('click'), () => {
      if(pl !== 0) {
        pl -= 1;
        const diiv = document.querySelector('#diiv');
        diiv.innerHTML = `<img src =${places[pl].image}>
        <h1>${places[pl].name}</h1>`;
      }
  })

  next.addEventListener(('click'), () => {
    if(pl !== places.length-1) {
      pl += 1;
      const diiv = document.querySelector('#diiv');
      diiv.innerHTML = `<img src =${places[pl].image}>
      <h1>${places[pl].name}</h1>`;
    }
})
};

export default Photos;
