import renderToDom from '../helpers/data/renderToDom';

const fightCardBuilder = () => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://animalcarearlington.com/wp-content/uploads/2018/08/chinchilla.jpg" alt="fightImage">
  <div class="card-body">
    <h5 class="card-title">FIGHT</h5>
    <p class="card-text" id="strength">Strength: 100</p>
    <a href="#" class="btn btn-primary" id="runAway">Run Away</a>
    <a href="#" class="btn btn-primary"id="kickIt">Kick It</a>
  </div>
</div>`;
  renderToDom('#fight', domString);
};

export default fightCardBuilder;
