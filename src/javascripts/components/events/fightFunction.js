let strength = 100;

const runAway = (e) => {
  e.preventDefault();
  strength += 1;
  if (strength > 100) {
    strength = 100;
    document.querySelector('#strength').innerHTML = `Strength: ${strength}`;
  } else {
    document.querySelector('#strength').innerHTML = `Strength: ${strength}`;
  }
};

const kickIt = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) {
    strength = 0;
    document.querySelector('#strength').innerHTML = `Strength: ${strength}`;
  } else {
    document.querySelector('#strength').innerHTML = `Strength: ${strength}`;
  }
};

export { runAway, kickIt };
