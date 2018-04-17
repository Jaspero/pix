import {Accordion} from './javascript/accordion';
import {Tabs} from './javascript/tabs';
import {Dropdown} from './javascript/dropdown';
import {Modal} from './javascript/modal';

window.onload = () => {
  new Accordion();
  new Tabs();
  new Dropdown();
  new Modal();
};