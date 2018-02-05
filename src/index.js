import React from 'react';
import ReactDOM from 'react-dom';
import PokedexModel from './features/pokedex/models'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = new PokedexModel()

ReactDOM.render(<App store={ store } />, document.getElementById('root'));
registerServiceWorker();
