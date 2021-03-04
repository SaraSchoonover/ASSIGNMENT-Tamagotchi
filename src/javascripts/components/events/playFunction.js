let fun = 50;

const superFun = (e) => {
  e.preventDefault();
  fun += 50;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#fun').innerHTML = `Fun: ${fun}`;
  } else {
    document.querySelector('#fun').innerHTML = `Fun: ${fun}`;
  }
};

const kindaFun = (e) => {
  e.preventDefault();
  fun += 2;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#fun').innerHTML = `Fun: ${fun}`;
  } else {
    document.querySelector('#fun').innerHTML = `Fun: ${fun}`;
  }
};

export { superFun, kindaFun };
