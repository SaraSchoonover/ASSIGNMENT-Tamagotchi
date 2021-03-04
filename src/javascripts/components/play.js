import renderToDom from '../helpers/data/renderToDom';

const playCardBuilder = () => {
  let domString = '';
  domString += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="http://chinchillacare.org/wp-content/uploads/2010/12/chinchilla-1.jpg" alt="playImage">
  <div class="card-body">
    <h5 class="card-title">PLAY</h5>
    <p class="card-text" id="fun">Fun: 50</p>
    <a href="#" class="btn btn-primary"id="superFun">Super Fun</a>
    <a href="#" class="btn btn-primary"id="kindaFun">Kinda Fun</a>
  </div>
</div>`;
  renderToDom('#play', domString);
};

export default playCardBuilder;
