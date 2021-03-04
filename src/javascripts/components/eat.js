import renderToDom from '../helpers/data/renderToDom';

const eatCardBuilder = () => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <img class="card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0MP4VcD6NnhItVP3XwIRLqAfx1rA_0YIZw&usqp=CAU" alt="eatImage">
  <div class="card-body">
    <h5 class="card-title">EAT</h5>
    <p class="card-text" id="full">Fullness: 100</p>
    <a href="#" class="btn btn-primary" id="banana">Eat Banana</a>
    <a href="#" class="btn btn-primary" id="cookie">Eat Cookie</a>
  </div>
</div>`;
  renderToDom('#eat', domString);
};

export default eatCardBuilder;
