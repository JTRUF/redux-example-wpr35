import {createStore} from 'redux';
import reducer from './ducks/partyList';

export default createStore(reducer);