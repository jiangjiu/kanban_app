import './main.css';
import React from 'react';
import App from './components/App.jsx';
import alt from './libs/alt.js';
import storage from './libs/storage.js';
import persist from './libs/persist.js';

main();

function main() {
    persist(alt, storage, 'app');

    const app = document.createElement('div');

    document.body.appendChild(app);

    React.render(<App />, app);
}
