import '../styles/main.scss';
import eatCardBuilder from './components/eat';
import fightCardBuilder from './components/fight';
import playCardBuilder from './components/play';
import sleepCardBuilder from './components/sleep';
import handleButtonClick from './helpers/data/buttonEvents';

const init = () => {
  eatCardBuilder();
  fightCardBuilder();
  playCardBuilder();
  sleepCardBuilder();
  handleButtonClick();
};

init();
