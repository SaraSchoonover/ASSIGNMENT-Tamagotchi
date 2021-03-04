let energy = 50;

const nap = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 10;
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  } else {
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  }
};

const deepSleep = (e) => {
  e.preventDefault();
  energy += 60;
  if (energy > 100) {
    energy = 100;
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  } else {
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  }
};

export { nap, deepSleep };
