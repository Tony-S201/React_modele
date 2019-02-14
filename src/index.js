/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * Local import
 */


/**
 * Code
 */
const Welcome = () => (
  <div id="welcome">Bienvenue dans React</div>
);

/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = <Welcome />;
// 2. La cible dans le DOM
const target = document.getElementById('root');

// rendu de react-dom : react VERS dom
render(rootComponent, target);
