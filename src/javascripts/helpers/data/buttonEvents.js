import { banana, cookie } from '../../components/events/eatFunction';
import { runAway, kickIt } from '../../components/events/fightFunction';
import { superFun, kindaFun } from '../../components/events/playFunction';
import { nap, deepSleep } from '../../components/events/sleepFunction';

const handleButtonClick = () => {
  document.querySelector('#banana').addEventListener('click', banana);
  document.querySelector('#cookie').addEventListener('click', cookie);
  document.querySelector('#runAway').addEventListener('click', runAway);
  document.querySelector('#kickIt').addEventListener('click', kickIt);
  document.querySelector('#superFun').addEventListener('click', superFun);
  document.querySelector('#kindaFun').addEventListener('click', kindaFun);
  document.querySelector('#nap').addEventListener('click', nap);
  document.querySelector('#deepSleep').addEventListener('click', deepSleep);
};

export default handleButtonClick;
