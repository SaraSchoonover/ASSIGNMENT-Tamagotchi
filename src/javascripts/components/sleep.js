import renderToDom from '../helpers/data/renderToDom';

const sleepCardBuilder = () => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNwWS30fWRa5qN_e-DxBCsCkV3TA6GEktLQ&usqp=CAU" alt="sleepImage">
  <div class="card-body">
    <h5 class="card-title">ENERGY</h5>
    <p class="card-text" id="energy">Energy: 50</p>
    <a href="#" class="btn btn-primary" id="nap">Nap</a>
    <a href="#" class="btn btn-primary" id="deepSleep">Deep Sleep</a>
  </div>
</div>`;
  renderToDom('#sleep', domString);
};

export default sleepCardBuilder;
