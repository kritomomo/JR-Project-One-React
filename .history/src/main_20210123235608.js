import App from "./components/App";


const render = () => ReactDOM.render(
    (<App render={render} />),
    document.querySelector('#root'),
);

render();