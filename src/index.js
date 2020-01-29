/* @dependencies */
import { createElement } from 'react';
import { render } from 'react-dom';

/* @components */
import App from 'views/App';

const mountNode = document.getElementById('root');

render(createElement(App), mountNode);
