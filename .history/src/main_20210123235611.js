import App from "./components/App";
import React from 'react';

const render = () => ReactDOM.render(
    (<App render={render} />),
    document.querySelector('#root'),
);

render();