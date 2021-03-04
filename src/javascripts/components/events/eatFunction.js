let full = 100;

const banana = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
    document.querySelector('#full').innerHTML = `Fullness: ${full}`;
  } else {
    document.querySelector('#full').innerHTML = `Fullness: ${full}`;
  }
};

const cookie = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) {
    full = 0;
    document.querySelector('#full').innerHTML = `Fullness: ${full}`;
  } else {
    document.querySelector('#full').innerHTML = `Fullness: ${full}`;
  }
};

export { banana, cookie };
